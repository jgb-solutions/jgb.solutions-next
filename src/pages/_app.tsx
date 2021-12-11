import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { APP_NAME } from '../utils/constants'

import '../styles/global.css'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title key="title">{APP_NAME}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
