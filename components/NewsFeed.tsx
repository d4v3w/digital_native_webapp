import { Content } from '../interfaces'
import List from './List'

export type NewsFeedProps = {
  items: Content[]
  filter?: string
  limit?: number
  order?: string
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

export const NewsFeed: React.FC<NewsFeedProps> = ({
  items,
  filter,
  limit,
  order = 'desc',
  className = 'news',
  isHeadingHidden,
  isImageHidden,
  isTextHidden,
}) => {
  return (
    <List
      items={items}
      filter={filter}
      limit={limit}
      order={order}
      className={className}
      isHeadingHidden={isHeadingHidden}
      isImageHidden={isImageHidden}
      isTextHidden={isTextHidden}
    />
  )
}

export default NewsFeed
