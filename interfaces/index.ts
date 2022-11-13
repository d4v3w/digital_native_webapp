export interface User {
  id: string
  name: string
}

export interface ContentOld {
  id: string
  type: string
  title: string
  date: string
  summary?: string | undefined
  story?: string | undefined
  image?: string | undefined
  link?: string | undefined
  author?: string
  children?: Array<Content>
}

export interface sys {
  id: string
  publishedAt: string
}

export interface Content {
  sys: sys
  title: string
  slug: string
  summary?: string | undefined
  story?: string | undefined
  image?: string | undefined
  link?: string | undefined
}

export interface ApiResponse {
  total: number
  items: Content[]
}
