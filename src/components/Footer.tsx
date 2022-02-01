import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

import Logo from './Logo'

const socialNetworks = [
  {
    icon: FaGithub,
    color: 'text-white',
    title: 'We share a lot of our work on Github. Check it out.',
    link: 'https://github.com/jgb-solutions',
  },
  {
    icon: FaLinkedin,
    color: 'text-linkedin',
    title: `Let's connect on LinkedIn`,
    link: 'https://linkedin.com/in/jean-g%C3%A9rard-bousiquot-85a83689',
  },
  {
    icon: FaTwitter,
    color: 'text-twitter',
    title: 'Follow us on Twitter',
    link: 'https://twitter.com/jgb_solutions',
  },
  {
    icon: FaFacebookF,
    color: 'text-facebook',
    title: 'Follow us on Facebook',
    link: 'https://www.facebook.com/jgbsolutions/',
  },
  {
    icon: FaInstagram,
    color: 'text-instagram',
    title: 'Follow us on Facebook',
    link: 'https://instagram.com/jgb.solutions',
  },
]

export default function Footer() {
  return (
    <nav className="shadow-md rounded-t-large bg-dark text-white px-2 py-8 flex flex-col items-center">
      <Logo
        containerClassName="mb-4"
        style={{ width: 200 }}
        url="/assets/images/logo-jgb-solutions-square-23k.png"
      />

      <div className="flex w-full sm:w-1/2 justify-around my-12 px-8">
        {socialNetworks.map((socialNetwork, index) => {
          const { icon: Icon, color, title, link } = socialNetwork

          return (
            <a href={link} target="__blank" key={index}>
              <Icon className={`${color}`} size={30} title={title} />
            </a>
          )
        })}
      </div>

      <div className="text-xs text-center">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </nav>
  )
}
