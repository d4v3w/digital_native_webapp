import classNames from 'classnames'
import Link from 'next/link'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import { Content } from '../interfaces'
import Article from './Article'
import Markdown from './Markdown'

type ListDetailProps = {
  item: Content
}

const newsLink = (link: string | undefined) => {
  if (!link) {
    return null
  }
  return (
    <Link href={link} className={styles.link}>
      <Markdown>{link}</Markdown>
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
      <Link href={'/' + item.type} className={styles.link} title="Navigate to previous page">
        <Markdown className="link">{`<< Back`}</Markdown>
      </Link>
    </nav>
  </Article>
)

export default ListDetail
