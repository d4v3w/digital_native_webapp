import classNames from 'classnames'
import { SocialIcon } from 'react-social-icons'
import { SITE_COPYRIGHT } from '../utils/common'
import styles from './footer.module.css'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const style = {
    width: '2rem',
    height: '2rem',
  }
  return (
    <footer className={classNames(styles.footer, className)} role="">
      <ul className={styles.footerLinks}>
        <li className={styles.footerLink}>
          <SocialIcon url="https://www.facebook.com/digitalnativeuk" style={style} />
        </li>
        <li className={styles.footerLink}>
          <SocialIcon url="https://soundcloud.com/digitalnativeuk" style={style} />
        </li>
        <li className={styles.footerLink}>
          <SocialIcon url="https://twitter.com/digitalnativeuk" style={style} />
        </li>
        <li className={styles.footerLink}>
          <SocialIcon url="https://digitalnativeuk.bandcamp.com" style={style} />
        </li>
      </ul>
      <span>{SITE_COPYRIGHT}</span>
    </footer>
  )
}
