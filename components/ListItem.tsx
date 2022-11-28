import classNames from 'classnames'
import Link from 'next/link'
import { Content, Media } from '../interfaces'
import Article from './Article'
import Heading from './Heading'
import styles from './listItem.module.css'
import Markdown from './Markdown'

export interface ListItemProps {
  id: number
  item: Content
  className?: string
  isHeadingHidden?: boolean
  isSummaryHidden?: boolean
  isStoryHidden?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  item,
  className = 'default',
  isHeadingHidden = false,
  isSummaryHidden = false,
  isStoryHidden = false,
}: ListItemProps) => {
  if (isHeadingHidden) {
    item.title = ''
  }
  const summary = !isSummaryHidden ? (
    <Heading type="subheading" className={classNames(styles.heading, styles.shortText)}>
      <>{item.summary}</>
    </Heading>
  ) : (
    ''
  )

  const story = !isStoryHidden ? (
    <Markdown className={classNames(styles.summary, styles.shortText)}>{item.story}</Markdown>
  ) : (
    ''
  )

  const image: Media | undefined = {} as Media //item.mediaCollection.items[0]

  return item.title || image || summary || story ? (
    <li className={classNames(styles.item, styles[className])}>
      <Link href="/news/[id]" as={`/news/${item.slug}`} className={styles.link} title={item.title}>
        <Article
          heading={item.title}
          image={image}
          isInline={true}
          className={className}
          data-index={id}
          data-id={item.slug}
        >
          <>
            {summary}
            {story}
          </>
        </Article>
      </Link>
    </li>
  ) : null
}

export default ListItem
