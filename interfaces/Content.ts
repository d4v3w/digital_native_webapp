import { MediaCollection } from './Media'
import { SysProps } from './SysProps'

export type Content = {
  sys: SysProps
  title: string
  slug: string
  summary?: string | undefined
  story?: string | undefined
  link?: string | undefined
  location?: string | undefined
  mediaCollection?: MediaCollection
  relatedCollection?: ContentCollection
}

export interface ContentCollection {
  total: number
  items: Content[]
}
