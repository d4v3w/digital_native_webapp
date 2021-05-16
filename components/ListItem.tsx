import Link from 'next/link'
import styles from './utils.module.css'
import { Article } from '../interfaces'

type Props = {
  data: Article
}

const ListItem = ({ data }: Props) => (
  <Link href="/news/[id]" as={`/news/${data.id}`}>
    <a className={styles.listItem}>
      {data.id}: {data.title}
    </a>
  </Link>
)

export default ListItem
