import { Content } from '../interfaces'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import Markdown from './Markdown'
import Link from 'next/link'
import classNames from 'classnames'
import Article from './Article'

type ListDetailProps = {
  item: Content
}

const newsLink = (link: string | undefined) => {
  if (!link) {
    return null
  }
  return (
    <Link href={link} passHref>
      <a className={styles.link}>
        <Markdown>{link}</Markdown>
      </a>
    </Link>
  )
}

const ListDetail = ({ item: item }: ListDetailProps) => (
  <Article heading={item.title} src={item.image} className={classNames(layoutStyles.article, styles.detail)}>
    <div className={styles.content}>
      <Markdown isInline={false} className="summary">
        {item.summary}
      </Markdown>
      <Markdown isInline={false} className="article">
        {item.story}
      </Markdown>
      {newsLink(item.link)}
      <Markdown isInline={false} className="footnote">
        {item.date}
      </Markdown>
    </div>
    <nav role="navigation">
      <Link href="/news" passHref>
        <a className={styles.link}>
          <Markdown content="Back" />
        </a>
      </Link>
    </nav>
  </Article>
)

export default ListDetail
