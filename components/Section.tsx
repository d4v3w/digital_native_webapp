import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './section.module.css'

export interface SectionProps {
  className?: string
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={classNames(styles.section, className)} role="complementary">
      {children}
    </section>
  )
}

export default Section
