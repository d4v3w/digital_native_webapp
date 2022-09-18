import Link from 'next/link'
import { Nav } from './Nav'
import classNames from 'classnames'
import styles from './header.module.css'
import Image from 'next/image'
import logoImage from '../public/images/logo/digital-native-logo-full.png'

export interface HeaderProps {
  className?: string
}
const logoSize = 100

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <Link href="/" passHref className={styles.logo}>
        <a className={styles.headerLogo}>
          <strong className={styles.text}>Digital Native UK</strong>
          <Image src={logoImage} alt="" width={logoSize} height={logoSize} priority={true} />
        </a>
      </Link>
      <Nav />
    </header>
  )
}
