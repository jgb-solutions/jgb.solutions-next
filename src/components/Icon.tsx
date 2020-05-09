import React from 'react'
import { IoMdGlobe } from 'react-icons/io'

export default function Icon({ type, ...rest }: { type: string }) {
  return type === 'website' ? (
    <IoMdGlobe {...rest} />
  ) : null
}