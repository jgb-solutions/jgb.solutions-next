import React, { ReactNode } from 'react'

import SEO from '../SEO'


export default function MainLayout({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <>
      <SEO />
      <div className={`container mx-auto px-3 ${className}`} style={{ maxWidth: 1200 }}>
        {children}
      </div>
    </>
  )
}
