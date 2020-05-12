import React from 'react'
import { IoMdGlobe } from 'react-icons/io'
import { MdHeadsetMic, MdDesktopMac } from 'react-icons/md'

export default function Icon({ type, ...rest }: { type: string }) {
  return type === 'website' ? (
    <IoMdGlobe {...rest} />
  ) : type === 'consulting' ? (
    <MdHeadsetMic {...rest} />
  ) : type === 'web app' ? (
    <MdDesktopMac {...rest} />
  ) : null
}