'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'
import { FilterProvider } from './Filter'
import { LanguageProvider } from './Language'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <FilterProvider>
            <CartProvider>{children}</CartProvider>
          </FilterProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
