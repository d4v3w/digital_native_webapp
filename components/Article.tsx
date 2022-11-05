import classNames from 'classnames'
import Heading, { HeadingType } from '../components/Heading'
import ImageBox from '../components/ImageBox'
import styles from './article.module.css'

export interface ArticleProps {
  heading: string | JSX.Element
  headingType?: HeadingType
  className?: string
  isInline?: boolean
  src?: string
  children: string | JSX.Element | undefined
}

const Article: React.FC<ArticleProps> = ({
  children,
  headingType = 'title',
  isInline = false,
  className = '',
  src = '',
  ...props
}: ArticleProps) => {
  const getHeading = props.heading ? (
    <Heading type={headingType} className={''}>
      {<>{props.heading}</>}
    </Heading>
  ) : null

  const getChildren = children ? <div className={styles.innerContent}>{children}</div> : null

  const getContent =
    props.heading || children ? (
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
