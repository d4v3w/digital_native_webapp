import classNames from 'classnames'
import Link from 'next/link'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import { Content } from '../interfaces/Content'
import { Media } from '../interfaces/Media'
import Article from './Article'
import { Gallery } from './Gallery'
import Markdown from './Markdown'

export interface ListDetailProps extends Content {
  title: string
  type: string
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

const ListDetail: React.FC<ListDetailProps> = ({ type, ...item }: ListDetailProps) => {
  const images: Array<Media> = [...item.mediaCollection.items]
  const mainImage: Media | undefined = images.shift()

  return (
    <Article
      heading={item.title}
      image={mainImage}
      className={classNames(layoutStyles.article, styles.detail)}
      type={type}
    >
      <>
        <div className={styles.content}>
          <Markdown className="summary">{item.summary}</Markdown>
          <Markdown className="article">{item.story}</Markdown>
          <Gallery items={images} />
          {newsLink(item.link)}
        </div>
        <nav role="navigation">
          <Link href={'/' + type} className={styles.link} title="Navigate to previous page" passHref>
            <Markdown className="link">{`<< Back`}</Markdown>
          </Link>
        </nav>
      </>
    </Article>
  )
}

export default ListDetail
