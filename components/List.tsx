import classNames from 'classnames'
import styles from './list.module.css'
import ListItem from './ListItem'

import type { Content } from '../interfaces'

export interface ListProps {
  items: Content[]
  filter?: string
  order?: string
  limit?: number
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

const getTime = (date: string) => {
  return new Date(date).getTime()
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
    sortedItems = items.sort((a, b) => getTime(b.date) - getTime(a.date))
  } else {
    // Ascending
    sortedItems = items.sort((a, b) => getTime(a.date) - getTime(b.date))
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
