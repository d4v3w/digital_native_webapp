import classNames from 'classnames'
import Link from 'next/link'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import { Content, Media } from '../interfaces'
import { getMediaItem, MediaAsset } from '../utils/mediaUtils'
import Article from './Article'
import { Gallery } from './Gallery'
import Markdown from './Markdown'

export type ListDetailProps = {
  item: Content
  media: Array<Media>
}

const newsLink = (item: Content) => {
  const link = item.link && item.type.match(/news|production/) ? '/' + item.type : undefined
  if (!link) {
    return null
  }
  return (
    <Link href={link} className={styles.link} passHref>
      <Markdown>{link}</Markdown>
    </Link>
  )
}

const backLink = (item: Content) => {
  const link = item.type.match(/news|music|production/) ? '/' + item.type : undefined
  if (!link) {
    return null
  }
  return (
    <nav>
      <Link href={link} className={styles.link} title="Navigate to previous page" passHref>
        <Markdown className="link">{`<< Back`}</Markdown>
      </Link>
    </nav>
  )
}

const bandCampPlayer = (item: Content) => {
  const link = item.link && item.link.match(/bandcamp.com/) && item.type.match(/music/) ? item.link : undefined
  if (!link) {
    return null
  }
  return (
    <>
      <iframe className={styles.iframe} src={link} seamless></iframe>
    </>
  )
}

const ListDetail: React.FC<ListDetailProps> = ({ item }: ListDetailProps) => {
  const itemMedia = item.media?.at(0) as MediaAsset

  const image: Media | undefined = getMediaItem(itemMedia)

  return (
    <Article
      heading={item.title}
      image={image}
      className={classNames(layoutStyles.article, styles.detail)}
      type={item.type}
    >
      <>
        <div className={styles.content}>
          <Markdown className="summary">{item.summary}</Markdown>
          <Markdown className="article">{item.story}</Markdown>
          <Gallery items={item?.media?.length ?? 0 > 1 ? item.media : []} />
          {bandCampPlayer(item)}
          {newsLink(item)}
        </div>
        {backLink(item)}
      </>
    </Article>
  )
}

export default ListDetail
