import React from 'react'
import { MdFavorite } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import Logo from './Logo'

const socialNetworks = [
  {
    icon: FaGithub,
    color: 'text-white',
    title: 'We share a lot of our work on Github. Check it out.',
    link: 'https://github.com/jgb-solutions'
  },
  {
    icon: FaLinkedin,
    color: 'text-linkedin',
    title: `Let's connect on LinkedIn`,
    link: 'https://linkedin.com/in/jean-g%C3%A9rard-bousiquot-85a83689'
  },
  {
    icon: FaTwitter,
    color: 'text-twitter',
    title: 'Follow us on Twitter',
    link: 'https://twitter.com/jgb_solutions'
  },
  {
    icon: FaFacebookF,
    color: 'text-facebook',
    title: 'Follow us on Facebook',
    link: 'https://www.facebook.com/jgbsolutions/'
  },
  {
    icon: FaInstagram,
    color: 'text-instagram',
    title: 'Follow us on Facebook',
    link: 'https://instagram.com/jgb.solutions'
  },
]

export default function Footer() {
  return (
    <nav className="shadow-md rounded-t-large bg-dark text-white px-2 py-8 flex flex-col items-center">
      <Logo style={{ width: 200 }} url="/assets/images/logo-jgb-solutions-square-23k.png" />

      <div className="flex w-1/2 justify-around my-12">
        {socialNetworks.map(socialNetwork => {
          const { icon: Icon, color, title, link } = socialNetwork

          return (
            <a href={link} target="__blank">
              <Icon className={`${color}`} size={30} title={title} />
            </a>
          )
        })}
      </div>

      <p className="text-xs">Built with <MdFavorite className="inline text-red-500" /> in Delmas, &copy; {(new Date).getFullYear()} </p>
    </nav>
  )
}