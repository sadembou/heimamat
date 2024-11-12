'use client'
import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import { Footer, Media } from '../../../../payload/payload-types'
import Link from 'next/link'
import { Button } from '../../Button'
import LanguageSelector from '../../LanguageSwitcher'

const FooterComponent = ({footer} : {footer:Footer}) => {
    const pathName = usePathname()
    const navItems = footer?.navItems || [];
  return (
    <footer className={noHeaderFooterUrls.includes(pathName) ? classes.hide : ''}>
        <Gutter>
            <ul className={classes.inclusions}>
                {inclusions.map(({title, description, icon}, index)=>(
                    <li key={title}>
                        <Image src={icon} alt={title} width={32} height={32} className={classes.icon}/>
                        <h5 className={classes.title}>{title}</h5>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </Gutter>
        <div className={classes.footer}>
            <Gutter>
                <div className={classes.wrap}>
                    <Link href='/'>
                        <Image src='/logo_text_white_v2.png' alt='logo' width={170} height={170}/>
                    </Link>
                    <p>{footer?.copyright}</p>
                    <div className={classes.socialLinks}>
                        {navItems.map(({link})=>{
                            const icon = link.icon as Media;
                            return(
                                <Button key={link.label} el='link' href={link.url} newTab = {true} className={classes.socialLinkItem} >
                                    <Image
                                        src={icon.url}
                                        alt={link.label}
                                        width={24}
                                        height={24}
                                        className={classes.socialIcon}
                                    />
                                </Button>
                            )
                        })}
                    </div>
                    <LanguageSelector/>
                </div>
            </Gutter>
        </div>

    </footer>
  )
}

export default FooterComponent
