import classNames from 'classnames'
import Link from 'next/link'
import { Content } from '../interfaces/Content'
import { Media } from '../interfaces/Media'
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
  isSummaryHidden?: boolean
  isStoryHidden?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  item,
  className = 'default',
  isImageHidden = false,
  isHeadingHidden = false,
  isSummaryHidden = false,
  isStoryHidden = false,
}: ListItemProps) => {
  let image: Media | undefined
  if (!isImageHidden && item.mediaCollection?.total) {
    image = item.mediaCollection.items.at(0)
  }
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

  return item.title || image || summary || story ? (
    <li className={classNames(styles.item, styles[className])}>
      <Link href="/news/[id]" as={`/news/${item.slug}`} className={styles.link} title={item.title}>
        <Article
          heading={item.title}
          image={image}
          isInline={true}
          className={className}
          data-index={id}
          data-id={item.sys.id}
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
