import styles from './section.module.css'
import classNames from 'classnames'

const Section = ({ className = '', ...props }) => {
  return <section className={classNames(styles.section, className)}>{props.children}</section>
}

export default Section
