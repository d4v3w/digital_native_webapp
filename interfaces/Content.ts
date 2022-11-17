import { MediaCollection } from './Media'
import { SysProps } from './SysProps'

export type Content = {
  sys: SysProps
  title: string
  slug: string
  summary: string
  story: string
  link: string
  location: string
  mediaCollection: MediaCollection
  relatedCollection: ContentCollection
}

export interface ContentCollection {
  total: number
  items: Content[]
}
