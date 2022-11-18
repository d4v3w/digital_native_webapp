import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import styles from './markdown.module.css'

export interface MarkdownProps {
  isInline?: boolean
  className?: string
  children?: string
}

const Markdown: React.FC<MarkdownProps> = ({ children, className = 'default', ...props }: MarkdownProps) => {
  if (!children) return null
  return (
    <div className={classNames(styles.markdown, styles[className])}>
      <ReactMarkdown {...props}>{children}</ReactMarkdown>
    </div>
  )
}

export default Markdown
