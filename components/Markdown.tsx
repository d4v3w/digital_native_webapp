import ReactMarkdown from "react-markdown"

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
   * CSS class to add to block element. 
   */
  className?: string
}


/**
 * Primary UI component for outputting string markdown
 */  
export const Markdown: React.FC<MarkdownProps> = ({
  content = '',
  isInline = true,
  className = '',
}) => {
  const elementClass: string = (!isInline) ? className : ''
  return (
    <ReactMarkdown
      children={content}
      className={elementClass}
    />
  );
}