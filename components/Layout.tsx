import React from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { SITE_COPYRIGHT, SITE_NAME } from '../utils/common'
import styles from './layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const siteTitle = SITE_NAME;

const pageTitle = (title: string) => {
  return title ? title + ' | ' + siteTitle : siteTitle;
}

const Layout = ({ children, title = '' }: Props): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{pageTitle(title)}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="All the latest news and info about your favourite DJ/Producer"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/news">
          <a>News</a>
        </Link>{' '}
        |{' '}
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer className={styles.footer}>
      <span>{SITE_COPYRIGHT}</span>
    </footer>
  </div>
)

export default Layout
