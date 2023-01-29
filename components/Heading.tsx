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
    return <h1 className={classNames(styles.title, className)}>{children}</h1>
  } else if (type === 'subheading') {
    return <h2 className={classNames(styles.subheading, className)}>{children}</h2>
  }
  return <h3 className={classNames(styles.heading, className)}>{children}</h3>
}

export default Heading
