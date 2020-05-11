import React from 'react'
import { IoMdGlobe } from 'react-icons/io'
import { MdHeadsetMic } from 'react-icons/md'

export default function Icon({ type, ...rest }: { type: string }) {
  return type === 'website' ? (
    <IoMdGlobe {...rest} />
  ) : type === 'consulting' ? (
    <MdHeadsetMic {...rest} />
  ) : null
}