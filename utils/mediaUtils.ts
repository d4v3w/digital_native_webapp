import { Asset } from 'contentful'
import { Media } from '../interfaces'

export const getMediaItem = (asset: Asset | undefined): Media => {
  if (typeof asset === 'undefined') {
    return {} as Media
  }

  console.log(asset)

  return {
    title: asset.fields.title,
    description: asset.fields.description,
    url: asset.fields.file.url,
    tags: asset.metadata.tags,
    type: asset.fields.file.contentType,
    height: asset.fields.file.details.image?.height,
    width: asset.fields.file.details.image?.width,
  }
}
