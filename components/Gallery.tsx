import { Asset } from 'contentful'
import ImageBox from './ImageBox'

export interface GalleryProps {
  items: Asset[] | undefined
  className?: string
}

export const Gallery: React.FC<GalleryProps> = ({ items = [] }) => {
  if (items.length === 0) {
    return null
  }
  return (
    <>
      {items.map((item, index) => {
        if (item.fields?.file.contentType !== 'image') {
          return null
        }
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
