import { Media } from '../interfaces/Media'
import ImageBox from './ImageBox'

export interface GalleryProps {
  items: Media[] | undefined
  className?: string
}

export const Gallery: React.FC<GalleryProps> = ({ items = [] }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <ImageBox
            src={item.url}
            width={item.width}
            height={item.height}
            title={item.title}
            alt={item.description}
            isBlock={true}
            index={index}
          />
        )
      })}
    </>
  )
}
