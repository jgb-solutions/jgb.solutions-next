import React from 'react'

import MainLayout from '../components/layouts/Main'
import SEO from '../components/SEO'
import Logo from '../components/Logo'
import Link from 'next/link'

const NotFoundPage = () => (
  <MainLayout wrapperClassName="bg-dark text-white">
    <SEO title="404: Page Not Found" />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo style={{ width: 300 }} className="mb-12" />
      <h1 className="uppercase text-2xl mb-4">Page Not Found!</h1>
      <p className="text-xs text-center">
        Oh, Sorry! The page your are looking for was not found. <br />
        Luckily you can always go back to the {<Link href="/"><a className="text-orange font-bold">homepage</a></Link>}.
      </p>
    </div>
  </MainLayout>
)

export default NotFoundPage
