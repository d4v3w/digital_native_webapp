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
      <Link href="/" passHref>
        <a className={styles.headerTitle}>
          <strong className={styles.headerText}>Digital Native UK</strong>
          <div className={styles.headerLogo}>
            <Image src={logoImage} alt="" width={logoSize} height={logoSize} priority={true} />
          </div>
        </a>
      </Link>
      <Nav />
    </header>
  )
}
