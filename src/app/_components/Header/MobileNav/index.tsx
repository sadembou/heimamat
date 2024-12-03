'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'
import { Button } from '../../Button'

import classes from './index.module.scss'
import { CartLink } from '../../CartLink'

export const HeaderMobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu

  
  const toogleMenu = ()=>{
    setMenuOpen((prev)=>!prev)
  }

  useEffect(()=>{
    const handleClickOutside = (event:MouseEvent)=>{
      if(menuRef.current && !menuRef.current.contains(event.target as Node)){
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <nav
      className={[
        classes.nav,
        //user === undefined && classes.hide,
        classes.menuOpen
      ]
        .filter(Boolean)
        .join(' ')}
      ref={menuRef}
    >
      <div className={`${classes.hamburger} ${menuOpen ? classes.active : ''}`} 
        onClick={toogleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${classes.menu} ${menuOpen ? classes.active : ''}`}
        
        onClick={toogleMenu}
      >
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link}  />
        })}
        {user && <CartLink/>}
        {!user && (
          <Button el='link' href='/login' label='Login' appearance='primary' onClick={()=>(window.location.href='/login')}/>
        )}
        {user && user.roles?.includes("admin") && (
          <Button el='link' label='Account' appearance='primary' onClick={()=>(window.location.href='/account')}/>
        )}
      </div>
    </nav>
  )
}
