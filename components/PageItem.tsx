import classNames from 'classnames'
import Link from 'next/link'
import { Content, Media } from '../interfaces'
import { getMediaItem, MediaAsset } from '../utils/mediaUtils'
import Article from './Article'
import Heading from './Heading'
import Markdown from './Markdown'
import styles from './pageItem.module.css'

export interface PageItemProps {
  id: number
  item: Content
  className?: string
  isHeadingHidden?: boolean
  isSummaryHidden?: boolean
  isStoryHidden?: boolean
}

const PageItem: React.FC<PageItemProps> = ({
  id,
  item,
  className = 'default',
  isHeadingHidden = false,
  isSummaryHidden = false,
  isStoryHidden = false,
}: PageItemProps) => {
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
      <Link href="/[id]" as={`/${item.slug}`} className={styles.link} title={item.title}>
        <Article
          heading={isHeadingHidden ? '' : item.title}
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

export default PageItem
