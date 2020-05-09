import React, { CSSProperties } from 'react'
import { APP_NAME } from '../utils/constants'
import Link from 'next/link'

interface Props {
  containerStyle?: CSSProperties
  style?: CSSProperties
  className?: string
  containerClassName?: string
  url?: string
}

export default function Logo({ containerStyle, style, className, containerClassName, url }: Props) {
  const containerStyles: CSSProperties = {
    ...containerStyle
  }

  let styles: CSSProperties = {
    width: 200,
    ...style
  }

  return (
    <div style={containerStyles} className={containerClassName}>
      <Link href="/">
        <span className="cursor-pointer">
          <img
            style={styles}
            className={className}
            src={url || "/assets/images/logo-jgb-solutions-21k.png"}
            alt={APP_NAME}
          />
        </span>
      </Link>
    </div>
  )
}