export interface User {
  id: string
  name: string
}

export interface Content {
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
