import ListItem from './ListItem'
import styles from './list.module.css'
import classNames from 'classnames'

import type { Content } from '../interfaces'

export type ListProps = {
  items: Content[]
  filter?: string
  order?: string
  limit?: number
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

export const List: React.FC<ListProps> = ({
  items,
  filter = '',
  order = 'asc',
  limit = 999,
  className = '',
  isHeadingHidden,
  isImageHidden,
  isTextHidden,
}: ListProps) => {
  let sortedItems: Content[]
  let counter = -1
  if (order !== 'asc') {
    // Descending
    sortedItems = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else {
    // Ascending
    sortedItems = items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }
  return (
    <ul className={classNames(styles.list, styles[className])}>
      {sortedItems.map((item, index) => {
        // Limit based on counter
        if (limit && counter === limit) {
          return
        }
        // Filter by type
        if (filter && item.type !== filter) {
          return
        }
        // Increment counter
        ++counter
        const key =
          `${className}-item-${index.toString()}-${item.id.toString()}` || `${index.toString()}-${counter.toString()}`
        return (
          <ListItem
            key={key}
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
