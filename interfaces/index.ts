import { AssetCollection, TagLink } from 'contentful'
import { IContentFields } from './contentful'

export type Content = IContentFields

export type ContentCollection = {
  items: ApiContent[]
  total: number
  type: PageType
}

export type ContentfulResponse = {
  contentCollection: ContentCollection
}

export type ApiContent = IContentFields & {
  mediaCollection: AssetCollection
  relatedCollection: ContentCollection
}

export type Media = {
  title?: string
  description?: string
  url: string
  tags?: TagLink[]
  type: string
  height?: number | undefined
  width?: number | undefined
}

export type PageType = 'event' | 'gallery' | 'music' | 'news' | 'page' | 'production'

export const ALL_PAGE_TYPES: PageType[] = ['event', 'gallery', 'music', 'news', 'page', 'production']
