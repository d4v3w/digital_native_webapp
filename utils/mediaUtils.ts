import { Asset } from 'contentful'
import { Media } from '../interfaces'

export type MediaAsset = Media & Asset

const getMediaType = (type: string | undefined): string => {
  let mediaType = ''
  switch (type) {
    case 'music':
      mediaType = type
      break
    default:
      mediaType = 'image'
  }
  return mediaType
}

export const getMediaItem = (asset: MediaAsset | undefined): Media | undefined => {
  if (typeof asset === 'undefined') {
    return undefined
  }

  const media: Media = {
    title: asset.title || asset.fields?.title,
    description: asset.description || asset.fields?.description,
    url: asset.url || asset.fields?.file?.url,
    tags: asset.metadata?.tags || [],
    type: getMediaType(asset.fields?.file?.contentType),
    height: asset.fields?.file?.details.image?.height || undefined,
    width: asset.fields?.file?.details.image?.width || undefined,
  }

  return media
}
