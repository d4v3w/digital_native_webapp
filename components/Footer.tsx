import classNames from 'classnames'
import styles from './footer.module.css'
import { SITE_COPYRIGHT } from '../utils/common'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      <span>{SITE_COPYRIGHT}</span>
    </footer>
  )
}
