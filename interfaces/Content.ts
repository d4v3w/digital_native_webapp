import { IContentFields } from './contentful'

export type Content = IContentFields

export interface ContentCollection {
  total: number
  items: Content[]
}
