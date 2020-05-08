import React from "react"

import SEO from "../components/SEO"
import MainLayout from '../components/layouts/Main'
import Logo from "../components/Logo"

const Work = () => (
  <MainLayout wrapperClassName="bg-dark text-white">
    <SEO title="Our Work" />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo style={{ width: 300 }} className="mb-12" />
      <h1 className="uppercase text-2xl mb-4">Page in construction</h1>
      <p className="text-xs text-center">
        We are still building this page, please come back later.
      </p>
    </div>
  </MainLayout>
)

export default Work
