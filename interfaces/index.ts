import { AssetCollection, TagLink } from 'contentful'
import { IContentFields } from './contentful'

export type Content = IContentFields

export type ApiContent = IContentFields & {
  mediaCollection: AssetCollection
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
