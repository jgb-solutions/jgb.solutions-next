import { CSSProperties } from 'react'

export interface WorkInterFace {
  image: string
  slug: string
  name: string
  featured: boolean
  type:
    | 'website'
    | 'web app'
    | 'mobile app'
    | 'consulting'
    | 'web hosting'
    | 'domain name'
    | 'broadcasting'
    | 'marketing'
    | 'seo'
  url: string
  detail: string
}

export interface ServiceInterFace {
  icon: string
  image: string
  title: string
  description: string
}

export interface ClassNames {
  className?: string
  style?: CSSProperties
}
