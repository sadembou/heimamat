import dotenv from 'dotenv'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import express from 'express'
import payload from 'payload'

import { seed } from './payload/seed'
import { mediaManagement } from 'payload-cloudinary-plugin'

const app = express()
const PORT = process.env.PORT || 3000

// Add Cloudinary dependency
app.use(mediaManagement({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}));

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    email: {
      fromName: process.env.HOSTINGER_FROM_NAME,
      fromAddress: process.env.HOSTINGER_FROM_ADDRESS,
      transportOptions: {
        host: process.env.HOSTINGER_SMTP_HOST,
        auth: {
          user: process.env.HOSTINGER_SMTP_USER,
          pass: process.env.HOSTINGER_SMTP_PASS,
        },
        port: Number(process.env.HOSTINGER_SMTP_PORT),
        secure: Number(process.env.HOSTINGER_SMTP_PORT) === 465, // true for port 465, false (the default) for 587 and others
        requireTLS: true,
      },
    },
    onInit: () => {
      payload.logger.info(`HeimsSmakk Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload)
    process.exit()
  }

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
