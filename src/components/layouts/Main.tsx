import React, { ReactNode } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRss } from "react-icons/fa"
import SEO from '../SEO'
import colors from '../../utils/colors'
import { APP_NAME } from '../../utils/constants'


export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SEO />
      <div className="container mx-auto px-3" style={{ maxWidth: 1200 }}>
        {children}
      </div>
    </>
  )
}
