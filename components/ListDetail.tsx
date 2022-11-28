import classNames from 'classnames'
import Link from 'next/link'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import { Content, Media } from '../interfaces'
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

const backLink = (item: Content) => {
  const link = item.type.match(/news|music|production/) ? '/' + item.type : undefined
  if (!link) {
    return null
  }
  return (
    <nav role="navigation">
      <Link href={link} className={styles.link} title="Navigate to previous page" passHref>
        <Markdown className="link">{`<< Back`}</Markdown>
      </Link>
    </nav>
  )
}

const ListDetail: React.FC<ListDetailProps> = ({ item, media }: ListDetailProps) => {
  return (
    <Article
      heading={item.title}
      image={media.at(0)}
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
        {backLink(item)}
      </>
    </Article>
  )
}

export default ListDetail
