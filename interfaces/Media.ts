import { Asset } from 'contentful'

export type Media = Asset

export interface MediaCollection {
  total: number
  items: Array<Media>
}
