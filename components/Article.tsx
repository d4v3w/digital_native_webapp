import ImageBox from '../components/ImageBox'
import Heading from '../components/Heading'
import styles from './article.module.css'
import classNames from 'classnames'

const getHeading = (heading: string, headingType: string): JSX.Element => {
  if (!heading) {
    return <></>
  }
  return <Heading type={headingType}>{heading}</Heading>
}

function getChildren(children: React.ReactNode): JSX.Element {
  if (!children) {
    return <></>
  }
  return <div className={styles.innerContent}>{children}</div>
}

const getContent = (heading: string, children: React.ReactNode, headingType: string): JSX.Element => {
  if (!heading || !children) {
    return <></>
  }
  return (
    <div className={styles.content}>
      {getHeading(heading, headingType)}
      {getChildren(children)}
    </div>
  )
}

const Article = ({ headingType = 'title', isInline = false, className = '', ...props }): JSX.Element => {
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
      {getContent(props.heading, props.children, headingType)}
    </article>
  )
}

export default Article
