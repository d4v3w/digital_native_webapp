import styles from './heading.module.css'
import classNames from 'classnames'

const Heading = ({ type = 'heading', className = '', ...props }) => {
  if (!props.children) {
    return null
  }
  if (type === 'title') {
    return (
      <h1 className={classNames(styles.title, className)} role="heading">
        {props.children}
      </h1>
    )
  } else if (type === 'subheading') {
    return (
      <h3 className={classNames(styles.subheading, className)} role="heading">
        {props.children}
      </h3>
    )
  }
  return (
    <h2 className={classNames(styles.heading, className)} role="heading">
      {props.children}
    </h2>
  )
}

export default Heading
