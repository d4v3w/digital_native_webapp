import "./styles.css";
import ReactMarkdown from "react-markdown";

type MarkdownProps = {
  content: string
  inline?: boolean
  className?: string
}

export default function Markdown(props: MarkdownProps) {
  const inlineClass: string = (props.inline) ? '' : 'text-block';
  return (
      <ReactMarkdown children={props.content} className={inlineClass} />
  );
}