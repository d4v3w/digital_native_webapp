import ListItem from './ListItem'
import styles from './list.module.css'
import classNames from 'classnames'

import type { Article } from '../interfaces'

export type ListProps = {
  items: Article[]
  filter?: string
  order?: string
  limit?: number
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

const List = ({
  items,
  filter = '',
  order = 'asc',
  limit = 999,
  className = 'default',
  isHeadingHidden,
  isImageHidden,
  isTextHidden,
}: ListProps) => {
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
    <ul className={classNames(styles.list, styles[className + 'List'])}>
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
          <ListItem
            id={counter}
            item={item}
            className={className}
            isHeadingHidden={isHeadingHidden}
            isImageHidden={isImageHidden}
            isTextHidden={isTextHidden}
          />
        )
      })}
    </ul>
  )
}

export default List
