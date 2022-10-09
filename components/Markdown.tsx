import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import styles from './markdown.module.css'

const Markdown = ({ className = 'default', ...props }) => (
  <div className={classNames(styles.markdown, styles[className])}>
    <ReactMarkdown {...props}>{props.children}</ReactMarkdown>
  </div>
)

export default Markdown
