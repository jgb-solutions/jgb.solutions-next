import React, { CSSProperties } from 'react'
import Link from 'next/link'

import Image from './Image'
import { APP_NAME, DOMAIN } from '../utils/constants'

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

  const imageProps = {
    style: styles,
    className,
    src: url || "/assets/images/logo-jgb-solutions-21k.png",
    alt: APP_NAME
  }

  return (
    <div style={containerStyles} className={containerClassName}>
      <Link href="/">
        <span className="cursor-pointer">

          {process.env.NODE_ENV === 'development' ? (
            <img {...imageProps} />
          ) : (
              <Image
                {...imageProps}
                src={`${DOMAIN}/${imageProps.src}`}
                photon={{
                  width: style?.width || 200
                }}
              />
            )}
        </span>
      </Link>
    </div>
  )
}