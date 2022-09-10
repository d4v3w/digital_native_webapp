import Link from 'next/link'
import { Nav } from './Nav'
import classNames from 'classnames'
import styles from './header.module.css'

export interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <Link href="/" passHref>
        <a>
          <strong className={styles.masthead}>Digital Native UK</strong>
        </a>
      </Link>
      <Nav />
    </header>
  )
}
