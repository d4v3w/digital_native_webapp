import ImageBox from '../components/ImageBox'
import Heading from '../components/Heading'
import styles from './article.module.css'
import classNames from 'classnames'

const Article = ({ isInline = false, className = '', ...props }) => {
  const inlineStyle = isInline ? 'inline' : ''
  return (
    <article className={classNames(styles.article, styles[inlineStyle], className)} role="article">
      <ImageBox
        className={classNames(className)}
        src={props.src}
        alt={props.heading}
        isBlock={true}
        priority={true}
        layout="responsive"
      />
      <div className={styles.content}>
        <Heading type="title">{props.heading}</Heading>
        <div className={styles.innerContent}>{props.children}</div>
      </div>
    </article>
  )
}

export default Article
