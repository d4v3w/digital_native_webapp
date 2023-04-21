import classNames from 'classnames'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import siteImage from '../public/images/hero/digital_native-journey_through---understated---gfr027.jpg'
import { SITE_NAME } from '../utils/common'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './layout.module.css'

export interface LayoutProps {
  children?: ReactNode
  title?: string
  className?: string
}

const siteTitle = SITE_NAME

const pageTitle = (title: string) => {
  return title ? title + ' | ' + siteTitle : siteTitle
}

const Layout: React.FC<LayoutProps> = ({ children, title = '', className = '' }: LayoutProps) => (
  <div className={styles.container}>
    <Head>
      <title>{pageTitle(title)}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`Keep up to date with DJ/Producer ${siteTitle}`} />
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
    <Header className="top" />
    <main className={classNames(styles.main, className)}>{children}</main>
    <Footer className="bottom" />
  </div>
)

export default Layout
