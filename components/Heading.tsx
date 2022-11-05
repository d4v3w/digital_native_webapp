import classNames from 'classnames'
import styles from './heading.module.css'

export declare type HeadingType = 'title' | 'heading' | 'subheading'

export interface HeadingProps {
  type: HeadingType
  className: string
  children: JSX.Element
}

const Heading: React.FC<HeadingProps> = ({ children, type = 'heading', className = '' }: HeadingProps) => {
  if (type === 'title') {
    return (
      <h1 className={classNames(styles.title, className)} role="heading">
        {children}
      </h1>
    )
  } else if (type === 'subheading') {
    return (
      <h3 className={classNames(styles.subheading, className)} role="heading">
        {children}
      </h3>
    )
  }
  return (
    <h2 className={classNames(styles.heading, className)} role="heading">
      {children}
    </h2>
  )
}

export default Heading
