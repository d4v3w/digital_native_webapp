import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logoImage from '../public/images/logo/digital-native-logo-full.png'
import styles from './header.module.css'
import { Nav } from './Nav'

export interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll up show the navbar
        setShow(true)
      } else {
        // if scroll down hide the navbar
        setShow(false)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header className={classNames(styles.header, styles[`${show && 'hidden'}`], className)}>
      <div className={styles.inner} role="menubar">
        <Link href="/" passHref className={styles.logo} role="navigation" aria-label="Home Page">
          <a className={styles.logo} role="menuitem">
            <strong className={styles.text}>Digital Native UK</strong>
            <Image src={logoImage} alt="" priority={true} layout="fill" />
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  )
}
