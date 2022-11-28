import classNames from 'classnames'
import Link from 'next/link'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import { Content, Media } from '../interfaces'
import { getMediaItem } from '../utils/mediaUtils'
import Article from './Article'
import { Gallery } from './Gallery'
import Markdown from './Markdown'

export type ListDetailProps = {
  item: Content
  media: Array<Media>
}

const newsLink = (link: string | undefined) => {
  if (!link) {
    return null
  }
  return (
    <Link href={link} className={styles.link} passHref>
      <Markdown>{link}</Markdown>
    </Link>
  )
}

const ListDetail: React.FC<ListDetailProps> = ({ item, media }: ListDetailProps) => {
  console.log(media)
  const itemMedia = item.media?.at(0)
  const image: Media | undefined = getMediaItem(itemMedia)

  console.log(item.media)

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
          <Gallery items={item.media} />
          {newsLink(item.link)}
        </div>
        <nav role="navigation">
          <Link href={'/' + item.type} className={styles.link} title="Navigate to previous page" passHref>
            <Markdown className="link">{`<< Back`}</Markdown>
          </Link>
        </nav>
      </>
    </Article>
  )
}

export default ListDetail
