import React from 'react'
import Link from 'next/link'

import Logo from './Logo'

const menuItems = [
  {
    to: '/',
    name: 'About'
  },
  {
    to: '/#services',
    name: 'Services'
  },
  {
    to: '/work',
    name: 'Work'
  },
  {
    to: '/contact',
    name: 'Contact'
  },
]

export default function Header() {
  return (
    <nav className="shadow-md mb-12 rounded-b-large bg-dark text-white p-2 flex flex-col items-center sm:flex-row sm:justify-between">
      <a>
        <Logo />
      </a>
      <ul className="flex w-full sm:w-1/2 md:1/3 sm:text-lg text-xs font-bold uppercase pt-3 pb-2 sm:p-0 justify-around sm:justify-between sm:mr-2">
        {menuItems.map((menuItem, index) => (
          <li className="hover:text-orange">
            <Link href={menuItem.to} key={index}>
              <a>{menuItem.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}