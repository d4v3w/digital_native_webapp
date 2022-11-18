import { IContentFields } from './contentful'

export type Content = IContentFields & {
  mediaCollection: MediaCollection
}

export type MediaCollection = Array<Media> & {
  total: number
  items: Media[]
}

export type Media = {
  title: string
  description: string
  url: string
  width: number
  height: number
}

export type PageType = 'event' | 'gallery' | 'music' | 'news' | 'page' | 'production'
