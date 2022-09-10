import ListItem from './ListItem'
import { Article } from '../interfaces'
import styles from './utils.module.css'
import newsStyles from './news.module.css'
import classNames from 'classnames'

export type ListProps = {
  items: Article[]
  filter?: string
  order?: string
  limit?: number
  className?: string
}

const List = ({ items, filter = '', order = 'asc', limit = 999, className = '' }: ListProps) => {
  let sortedItems
  if (order !== 'asc') {
    // Descending
    sortedItems = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else {
    // Ascending
    sortedItems = items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }
  return (
    <ul className={classNames(styles.list, className ? newsStyles[className + '-list'] : 'list')}>
      {sortedItems.slice(0, limit).map((item) => (
        <li key={item.id} className={className ? newsStyles[className + '-item'] : 'list-item'}>
          <ListItem data={item} className={className} />
        </li>
      ))}
    </ul>
  )
}

export default List
