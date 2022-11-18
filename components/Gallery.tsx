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
            src={item?.fields.file.url || ''}
            width={item?.fields.file.details.image?.width}
            height={item?.fields.file.details.image?.height}
            title={item?.fields.title}
            alt={item?.fields.title}
            isBlock={true}
            index={index}
          />
        )
      })}
    </>
  )
}
