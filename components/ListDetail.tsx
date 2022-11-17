import classNames from 'classnames'
import Link from 'next/link'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import { Content } from '../interfaces/Content'
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
  return (
    <Article
      heading={item.title}
      image={item.mediaCollection?.total ? item.mediaCollection.items.at(0) : undefined}
      className={classNames(layoutStyles.article, styles.detail)}
      type={type}
    >
      <>
        <div className={styles.content}>
          <Markdown className="summary">{item.summary}</Markdown>
          <Markdown className="article">{item.story}</Markdown>
          <Gallery items={item.mediaCollection?.items} />
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
