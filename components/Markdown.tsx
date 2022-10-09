import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import styles from './markdown.module.css'

const Markdown = ({ className = 'default', ...rest }) => (
  <div className={classNames(styles.markdown, styles[className])}>
    <ReactMarkdown {...rest.props}>{rest.props.children}</ReactMarkdown>
  </div>
)

export default Markdown
