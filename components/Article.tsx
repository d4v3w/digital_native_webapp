import classNames from 'classnames'
import Heading, { HeadingType } from '../components/Heading'
import ImageBox from '../components/ImageBox'
import styles from './article.module.css'

export declare type ArticleProps = {
  heading: string | JSX.Element
  headingType?: HeadingType
  className?: string
  isInline?: boolean
  src?: string
  children?: JSX.Element
}

const Article = ({ headingType = 'title', isInline = false, className = '', src = '', ...props }: ArticleProps) => {
  const getHeading = props.heading ? (
    <Heading type={headingType} className={''}>
      {<>{props.heading}</>}
    </Heading>
  ) : null

  const getChildren = props.children ? <div className={styles.innerContent}>{props.children}</div> : null

  const getContent =
    props.heading || props.children ? (
      <div className={styles.content}>
        {getHeading}
        {getChildren}
      </div>
    ) : null

  const inlineStyle = isInline ? 'inline' : ''
  return (
    <article className={classNames(styles.article, styles[inlineStyle], styles[className])} role="article">
      <ImageBox
        className={classNames(className)}
        src={src}
        alt={props.heading ? props.heading.toString() : ''}
        isBlock={true}
        priority={true}
        layout="responsive"
      />
      {getContent}
    </article>
  )
}

export default Article
