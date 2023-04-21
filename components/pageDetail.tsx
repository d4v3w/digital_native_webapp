import classNames from 'classnames'
import Link from 'next/link'
import { Content, Media } from '../interfaces'
import { getMediaItem, MediaAsset } from '../utils/mediaUtils'
import Article from './Article'
import { Gallery } from './Gallery'
import Markdown from './Markdown'
import styles from './pageDetail.module.css'
import Player from './Player'

export type PageDetailProps = {
  item: Content
  media: Array<Media>
}

const generateLink = (item: Content) => {
  const link = item.link ? item.link : undefined
  if (!link) {
    return null
  }

  if (link.match(/bandcamp.com\/EmbeddedPlayer/)) {
    return (
      <>
        <iframe className={styles.iframe} src={link} seamless></iframe>
      </>
    )
  }

  if (link.match(/soundcloud|youtube|facebook|dailymotion|vimeo|file|wistia|mixcloud|vidyard|twitch/)) {
    return <Player url={link} />
  }

  return (
    <Link href={link} className={styles.link} passHref>
      <Markdown>{link}</Markdown>
    </Link>
  )
}

const PageDetail: React.FC<PageDetailProps> = ({ item }: PageDetailProps) => {
  const itemMedia = item.media?.at(0) as MediaAsset

  const image: Media | undefined = getMediaItem(itemMedia)

  return (
    <Article heading={item.title} image={image} className={classNames(styles.detail)} type={item.type}>
      <>
        <div className={styles.content}>
          <Markdown className="summary">{item.summary}</Markdown>
          <Markdown className="article">{item.story}</Markdown>
          <Gallery items={item?.media?.length ?? 0 > 1 ? item.media : []} />
          {generateLink(item)}
        </div>
      </>
    </Article>
  )
}

export default PageDetail
