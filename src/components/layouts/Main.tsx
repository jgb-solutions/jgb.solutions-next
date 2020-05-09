import React, { ReactNode } from 'react'

import SEO from '../SEO'
import Footer from '../Footer'
import Header from '../Header'


export default function MainLayout({ children, className, wrapperClassName }: { children: ReactNode, className?: string, wrapperClassName?: string }) {
  return (
    <>
      <SEO />

      <div className={wrapperClassName}>
        <div className={`container mx-auto px-3 ${className}`} style={{ maxWidth: 1200 }}>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </div>
      </div>
    </>
  )
}
