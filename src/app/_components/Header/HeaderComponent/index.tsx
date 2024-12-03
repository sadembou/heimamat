'use client'
import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { HeaderMobileNav as NavBar } from '../MobileNav'

const HeaderComponent = ({ header }: { header:Header }) => {
    const pathName = usePathname();

  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathName) && classes.hide].filter(Boolean).join(' ')}>
        <Gutter className={classes.wrap}>
            <Link href='/'>
              <Image src='/logo_text_black_v2.png' alt='logo' width={170} height={50} />
            </Link>
            <NavBar header={header}/>
        </Gutter>
    </nav>
  )
}

export default HeaderComponent