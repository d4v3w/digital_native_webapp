import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './nav.module.css'

export interface NavProps {
  className?: string
}

const navItems = ['Home', 'About', 'News', 'Music', 'Production']

const getActiveClass = (path: string) => {
  const router = useRouter()
  if (router.pathname === '/' && path === 'Home') {
    return styles.navActive
  }
  return router.pathname.startsWith('/' + path.toLowerCase()) ? styles.navActive : null
}

export const Nav: React.FC<NavProps> = ({ className = '' }) => {
  return (
    <nav className={classNames(styles.nav, className)} role="navigation">
      <ul className={classNames(styles.navList)}>
        {navItems.map((name, index) => (
          <li key={`nav-${index}`} className={classNames(styles.navItem, getActiveClass(name))}>
            <Link href={name === 'Home' ? '/' : '/' + name.toLowerCase()} passHref>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
