import ReactMarkdown from 'react-markdown'

export interface MarkdownProps {
  /**
   * Markdown string to render
   */
  content: string
  /**
   * Is this an inline <span> or block <div>
   */
  isInline?: boolean
  /**
   * CSS class to add to block element. (isInline must also be false)
   */
  className?: string
}

/**
 * Primary UI component for outputting string markdown
 */
export const Markdown: React.FC<MarkdownProps> = ({ content, isInline = true, className }) => {
  const elementClass = !isInline && className ? className : ''
  return <ReactMarkdown children={content} className={elementClass} />
}

export default Markdown
