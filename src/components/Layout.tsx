import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layaout = ({children, title}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layaout