'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function Providers ({ children }: { children: ReactNode }) {
  
  return <ThemeProvider attribute='class'>
    {children}
  </ThemeProvider>
}