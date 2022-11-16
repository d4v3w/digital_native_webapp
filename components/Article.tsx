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
  type?: string
  children: string | JSX.Element | undefined
}

const Article: React.FC<ArticleProps> = ({
  children,
  headingType = 'title',
  isInline = false,
  className = 'default',
  type = 'default',
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

  const inlineStyle: string = isInline ? 'inline' : ''
  const imageSize: number = isInline ? 500 : 800
  const imgSrc = type === 'news' ? '' : src
  return (
    <article
      className={classNames(styles.article, styles[inlineStyle], styles[className])}
      role="article"
      data-content-type={type}
    >
      <ImageBox
        src={imgSrc}
        alt={props.heading ? props.heading.toString() : ''}
        isBlock={!isInline}
        priority={!isInline}
        width={imageSize}
        height={imageSize}
      />
      {getContent}
    </article>
  )
}

export default Article
