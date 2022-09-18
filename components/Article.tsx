import ImageBox from '../components/ImageBox'
import Heading from '../components/Heading'
import styles from './article.module.css'
import classNames from 'classnames'

const Article = ({ isInline = false, className = '', ...props }) => {
  const inlineStyle = isInline ? 'inline' : ''

  const heading = props.heading ? (
    <>
      <Heading type="title">{props.heading}</Heading>
    </>
  ) : null
  const children = props.children ? (
    <>
      <div className={styles.innerContent}>{props.children}</div>
    </>
  ) : null
  const content =
    props.heading || props.children ? (
      <>
        <div className={styles.content}>
          {heading}
          {children}
        </div>
      </>
    ) : null

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
      {content}
    </article>
  )
}

export default Article
