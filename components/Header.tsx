import Link from 'next/link'
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
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about" passHref>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/news" passHref>
          <a>News</a>
        </Link>{' '}
        |{' '}
        <Link href="/contact" passHref>
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  )
}
