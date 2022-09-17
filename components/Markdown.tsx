import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import styles from './markdown.module.css'

const Markdown = ({ className = 'default', ...props }) => {
  return (
    <div className={classNames(styles.markdown, styles[className])}>
      <ReactMarkdown {...props}>{props.children}</ReactMarkdown>
    </div>
  )
}

export default Markdown
