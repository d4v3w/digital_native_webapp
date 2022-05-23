import { Article } from '../interfaces'
import styles from '../components/layout.module.css'
import Markdown from './Markdown'
import Link from 'next/link'

type ListDetailProps = {
  item: Article
}

const ListDetail = ({ item: item }: ListDetailProps) => (
  <article className={styles.article}>
    <h2 className={styles.headingSecondary}>{item.title}</h2>
    <p>{item.date}</p>
    <p>{item.story}</p>
    <nav>
      <Link href="/news" passHref>
        <a>
          <Markdown content="Back" />
        </a>
      </Link>
    </nav>
  </article>
)

export default ListDetail
