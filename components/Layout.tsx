import React from 'react'
import { ReactNode } from 'react'
import Head from 'next/head'
import { SITE_COPYRIGHT, SITE_NAME } from '../utils/common'
import styles from './layout.module.css'
import classNames from 'classnames'
import { Header } from './Header'
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
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header className="fixed" />
    <div className={classNames(styles.bodyContent, className)}>{children}</div>
    <footer className={styles.footer}>
      <span>{SITE_COPYRIGHT}</span>
    </footer>
  </div>
)

export default Layout
