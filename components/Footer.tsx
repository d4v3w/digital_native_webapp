import Link from 'next/link'
import classNames from 'classnames'
import styles from './footer.module.css'
import { SITE_COPYRIGHT } from '../utils/common'
import { SocialIcon } from 'react-social-icons'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLink}>
          <SocialIcon url="https://www.facebook.com/digitalnativeuk" bgColor="#ff5a01" />
        </li>
        <li className={styles.footerLink}>
          <SocialIcon url="https://soundcloud.com/digitalnativeuk" />
        </li>
        <li className={styles.footerLink}>
          <SocialIcon url="https://twitter.com/digitalnativeuk" />
        </li>
        <li className={styles.footerLink}>
          <SocialIcon url="https://digitalnativeuk.bandcamp.com" />
        </li>
      </ul>
      <span>{SITE_COPYRIGHT}</span>
    </footer>
  )
}
