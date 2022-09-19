import ImageBox from '../components/ImageBox'
import Heading from '../components/Heading'
import styles from './article.module.css'
import classNames from 'classnames'

const Article = ({ headingType = 'title', isInline = false, className = '', ...props }): JSX.Element => {
  const getHeading = props.heading ? <Heading type={headingType}>{props.heading}</Heading> : null

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
        src={props.src}
        alt={props.heading}
        isBlock={true}
        priority={true}
        layout="responsive"
      />
      {getContent}
    </article>
  )
}

export default Article
