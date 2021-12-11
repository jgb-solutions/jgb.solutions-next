import { FC } from 'react'
import Link, { LinkProps } from 'next/link'

import { ClassNames } from '../../interfaces'

const LinkWrapper: FC<LinkProps & ClassNames> = ({
  children,
  className,
  style,
  ...props
}) => (
  <Link {...props}>
    <a className={className} style={style}>
      {children}
    </a>
  </Link>
)

export default LinkWrapper
