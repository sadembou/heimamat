import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Mammasaty',
  title: 'Smakkir kring heimin',
  description: 'An open-source e-commerce store built with Payload and Next.js.',
  images: [
    {
      //url: 'https://payloadcms.com/images/og-image.jpg',
      url:'/assets/icons/heimsmakk_logo.png'
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
