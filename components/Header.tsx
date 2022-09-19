import Link from 'next/link'
import { Nav } from './Nav'
import classNames from 'classnames'
import styles from './header.module.css'
import Image from 'next/image'
import logoImage from '../public/images/logo/digital-native-logo-full.png'

export interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.inner}>
        <Link href="/" passHref className={styles.logo}>
          <a className={styles.logo}>
            <strong className={styles.text}>Digital Native UK</strong>
            <Image src={logoImage} alt="" priority={true} layout="fill" />
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  )
}
