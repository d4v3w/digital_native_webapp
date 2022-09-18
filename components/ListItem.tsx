import Link from 'next/link'
import { Content } from '../interfaces'
import styles from './listItem.module.css'
import Markdown from './Markdown'
import classNames from 'classnames'
import Article from './Article'
import Heading from './Heading'

type ListItemProps = {
  id: number
  item: Content
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

const ListItem = ({ id, item, className = 'default', isHeadingHidden, isTextHidden }: ListItemProps) => {
  if (isHeadingHidden) {
    item.title = ''
  }
  if (isTextHidden) {
    item.summary = ''
    item.story = ''
  }
  return (
    <li className={classNames(styles.listItem, className)}>
      <Link href="/news/[id]" as={`/news/${item.id}`}>
        <a className={styles.link} title={item.title}>
          <Article
            heading={item.title}
            src={item.image}
            isInline={true}
            className={className}
            data-index={id}
            data-id={item.id.toString()}
          >
            <Heading type="subheading" className={classNames(styles.heading, styles.shortText)}>
              {item.summary}
            </Heading>
            <Markdown className={classNames(styles.summary, styles.shortText)} isInline={false}>
              {item.story}
            </Markdown>
          </Article>
        </a>
      </Link>
    </li>
  )
}

export default ListItem
