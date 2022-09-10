import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './nav.module.css'

export interface NavProps {
  className?: string
}

const getActiveClass = (path: string) => {
  const router = useRouter()

  return router.pathname == path ? styles.navActive : null
}

export const Nav: React.FC<NavProps> = ({ className = '' }) => {
  return (
    <nav className={classNames(styles.nav, className)}>
      <ul className={classNames(styles.navList)}>
        <li className={classNames(styles.navItem, getActiveClass('/'))}>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li className={classNames(styles.navItem, getActiveClass('/about'))}>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </li>
        <li className={classNames(styles.navItem, getActiveClass('/news'))}>
          <Link href="/news" passHref>
            <a>News</a>
          </Link>
        </li>
        <li className={classNames(styles.navItem, getActiveClass('/music'))}>
          <Link href="/music" passHref>
            <a>Music</a>
          </Link>
        </li>
        <li className={classNames(styles.navItem, getActiveClass('/production'))}>
          <Link href="/production" passHref>
            <a>Production</a>
          </Link>
        </li>
        <li className={classNames(styles.navItem, getActiveClass('/contact'))}>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
