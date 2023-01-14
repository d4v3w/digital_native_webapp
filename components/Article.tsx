import classNames from 'classnames'
import Heading, { HeadingType } from '../components/Heading'
import ImageBox from '../components/ImageBox'
import { Media } from '../interfaces'
import styles from './article.module.css'

export interface ArticleProps {
  heading: string | JSX.Element
  headingType?: HeadingType
  className?: string
  isInline?: boolean
  image?: Media | undefined
  type?: string
  children: string | JSX.Element | undefined
}

const Article: React.FC<ArticleProps> = ({
  children,
  headingType = 'title',
  isInline = false,
  className = 'default',
  type = 'default',
  image,
  ...props
}: ArticleProps) => {
  const getHeading = props.heading ? (
    <Heading type={headingType} className={''}>
      {<>{props.heading}</>}
    </Heading>
  ) : null

  const getChildren = children ? <div className={styles.innerContent}>{children}</div> : null

  const getContent =
    getHeading !== null || getChildren !== null ? (
      <div className={styles.content}>
        {getHeading}
        {getChildren}
      </div>
    ) : null

  const inlineStyle: string = isInline ? 'inline' : ''

  return (
    <article
      className={classNames(styles.article, styles[inlineStyle], styles[className])}
      role="article"
      data-content-type={type}
    >
      <ImageBox
        src={image?.url || ''}
        alt={props.heading ? props.heading.toString() : ''}
        isBlock={!isInline}
        priority={true}
        width={image?.width}
        height={image?.height}
      />
      {getContent}
    </article>
  )
}

export default Article
