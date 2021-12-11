import React from 'react'
import clx from 'classnames'
import { useRouter } from 'next/router'

import Logo from './Logo'
import LinkWrapper from './LinkWrapper'

const menuItems = [
  {
    to: '/about',
    name: 'About',
  },
  {
    to: '/work',
    name: 'Work',
  },
  {
    to: '/contact',
    name: 'Contact',
  },
]

export default function Header() {
  const router = useRouter()

  return (
    <nav className="shadow-md mb-12 rounded-b-large bg-dark text-white p-2 flex flex-col items-center sm:flex-row sm:justify-between">
      <a>
        <Logo />
      </a>

      <ul className="flex w-full sm:flex-none sm:max-w-sm sm:justify-end text-lg  font-bold uppercase pt-3 pb-2 sm:p-0 justify-around sm:mr-2">
        {menuItems.map((menuItem) => (
          <li className="hover:text-orange sm:ml-3" key={menuItem.name}>
            <LinkWrapper
              href={menuItem.to}
              className={clx({
                'text-orange animate-pulse': router.pathname.includes(
                  menuItem.to
                ),
              })}
            >
              {menuItem.name}
            </LinkWrapper>
          </li>
        ))}
      </ul>
    </nav>
  )
}
