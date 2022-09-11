import React from 'react'
import { ReactNode } from 'react'
import Head from 'next/head'
import { SITE_NAME } from '../utils/common'
import styles from './layout.module.css'
import classNames from 'classnames'
import { Header } from './Header'
import { Footer } from './Footer'
import siteImage from '../public/images/hero/digital_native-journey_through---understated---gfr027.jpg'

type Props = {
  children?: ReactNode
  title?: string
  className?: string
}

const siteTitle = SITE_NAME

const pageTitle = (title: string) => {
  return title ? title + ' | ' + siteTitle : siteTitle
}

const Layout = ({ children, title = '', className = '' }: Props): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{pageTitle(title)}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`All the latest news and info about your favourite DJ/Producer ${siteTitle}`} />
      <meta property="og:image" content={siteImage.src} />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="msvalidate.01" content="140A49DC28723A43FFD7F16C8C9D900F" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Header className="fixed" />
    <div className={classNames(styles.bodyContent, className)}>{children}</div>
    <Footer className="bottom" />
  </div>
)

export default Layout
