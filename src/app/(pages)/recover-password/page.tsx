import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { RenderParams } from '../../_components/RenderParams'

export default async function RecoverPassword() {
  return (
    <section className={classes.recoverPassword}>
      <div className={classes.heroImg}>
        <Link href={`/`}>
          <Image src="/logo-black.svg" alt='logo' width={250} height={25} className={classes.logo} />
        </Link>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params}/>
          <Link href={`/login`} className={classes.backLink}>
            <Image src='/assets/icons/arrow-left.svg' alt='left-arrow' width={25} height={25}/>
            <span>Back to login</span>
          </Link>
          <div className={classes.formTitle}>
            <h3>
              Forgot Password
            </h3>
          </div>
          <RecoverPasswordForm/>
        </div>

      </div>

    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
