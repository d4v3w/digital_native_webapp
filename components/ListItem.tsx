import classNames from 'classnames'
import Link from 'next/link'
import { Content } from '../interfaces'
import Article from './Article'
import Heading from './Heading'
import styles from './listItem.module.css'
import Markdown from './Markdown'

export interface ListItemProps {
  id: number
  item: Content
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  item,
  className = 'default',
  isImageHidden = false,
  isHeadingHidden,
  isTextHidden,
}: ListItemProps) => {
  if (isImageHidden) {
    item.image = ''
  }
  if (isHeadingHidden) {
    item.title = ''
  }
  const text = !isTextHidden ? (
    <>
      <Heading type="subheading" className={classNames(styles.heading, styles.shortText)}>
        <>{item.summary}</>
      </Heading>
      <Markdown className={classNames(styles.summary, styles.shortText)}>{item.story}</Markdown>
    </>
  ) : (
    ''
  )

  return item.title || item.image || text ? (
    <li className={classNames(styles.item, styles[className])}>
      <Link href="/news/[id]" as={`/news/${item.id}`} className={styles.link} title={item.title}>
        <Article
          heading={item.title}
          src={item.image}
          isInline={true}
          className={className}
          data-index={id}
          data-id={item.id.toString()}
        >
          {text}
        </Article>
      </Link>
    </li>
  ) : null
}

export default ListItem
