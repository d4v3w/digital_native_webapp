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
    return styles.active
  }
  return router.pathname.startsWith('/' + path.toLowerCase()) ? styles.active : null
}

export const Nav: React.FC<NavProps> = ({ className = '' }) => {
  return (
    <nav className={classNames(styles.nav, className)} role="navigation">
      <input type="checkbox" id="menu-toggle" className={classNames(styles.toggle)} />
      <label htmlFor="menu-toggle" className={classNames(styles.container)}>
        <div className={classNames(styles.button)}></div>
      </label>
      <ul className={classNames(styles.menu)}>
        {navItems.map((name, index) => (
          <li key={`nav-${index}`} className={classNames(styles.item, getActiveClass(name))}>
            <Link href={name === 'Home' ? '/' : '/' + name.toLowerCase()} passHref>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
