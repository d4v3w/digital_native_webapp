import ListItem from './ListItem'
import styles from './utils.module.css'
import newsStyles from './news.module.css'
import classNames from 'classnames'

import type { Article } from '../interfaces'

export type ListProps = {
  items: Article[]
  filter?: string
  order?: string
  limit?: number
  className?: string
}

const List = ({ items, filter = '', order = 'asc', limit = 999, className = '' }: ListProps) => {
  let sortedItems: Article[]
  let counter = 0
  if (order !== 'asc') {
    // Descending
    sortedItems = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else {
    // Ascending
    sortedItems = items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }
  return (
    <ul className={classNames(styles.list, className ? newsStyles[className + '-list'] : 'list')}>
      {sortedItems.map((item) => {
        // Limit based on counter
        if (limit && counter === limit) {
          return
        }
        // Filter by type
        if (filter && item.type !== filter) {
          return
        }
        counter = counter + 1
        return (
          <li key={item.id} className={className ? newsStyles[className + '-item'] : 'list-item'}>
            <ListItem data={item} className={className} />
          </li>
        )
      })}
    </ul>
  )
}

export default List
