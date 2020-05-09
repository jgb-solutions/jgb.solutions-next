import React from "react"

import SEO from "../components/SEO"
import MainLayout from '../components/layouts/Main'
import Logo from "../components/Logo"

const Contact = () => (
  <MainLayout wrapperClassName="bg-dark text-white">
    <SEO title="Contact US" />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="uppercase text-2xl mb-4">Page under construction</h1>
      <p className="text-xs text-center">
        We are still building this page, please come back later.
      </p>
    </div>
  </MainLayout>
)

export default Contact
