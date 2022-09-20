import ImageBox from '../components/ImageBox'
import Heading from '../components/Heading'
import styles from './article.module.css'
import classNames from 'classnames'

const Title = ({ heading = '', type = '' }): JSX.Element => {
  if (!heading) {
    return <></>
  }
  return <Heading type={type}>{heading}</Heading>
}

const Children = ({ children = '' }): JSX.Element => {
  if (!children) {
    return <></>
  }
  return <div className={styles.innerContent}>{children}</div>
}

const Content = ({ heading = '', type = '', children = null }): JSX.Element => {
  if (!heading || !children) {
    return <></>
  }
  return (
    <div className={styles.content}>
      <Title heading={heading} type={type} />
      <Children children={children} />
    </div>
  )
}

const Article = ({ heading = '', headingType = 'title', isInline = false, className = '', ...props }): JSX.Element => {
  const inlineStyle = isInline ? 'inline' : ''
  return (
    <article className={classNames(styles.article, styles[inlineStyle], styles[className])} role="article">
      <ImageBox
        className={classNames(className)}
        src={props.src}
        alt={props.heading}
        isBlock={true}
        priority={true}
        layout="fill"
      />
      <Content heading={heading} type={headingType} children={props.children} />
      <Content heading="" />
    </article>
  )
}

export default Article
