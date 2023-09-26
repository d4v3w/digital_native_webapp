import classNames from 'classnames'
import Link from 'next/link'
import { Content, Media } from '../interfaces'
import { getMediaItem, MediaAsset } from '../utils/mediaUtils'
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

  const itemMedia = item.media?.at(0) as MediaAsset //item.mediaCollection.items[0]
  const image: Media | undefined = getMediaItem(itemMedia)

  return item.title || image || summary || story ? (
    <li className={classNames(styles.item, styles[className])}>
      <Link href="/news/[id]" as={`/news/${item.slug}`} className={styles.link} title={item.title}>
        <Article
          heading={isHeadingHidden ? '' : item.title}
          headingType='subheading'
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
