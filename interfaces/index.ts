export type User = {
  id: string
  name: string
}

export type Content = {
  id: string
  type: string
  title: string
  date: string
  summary?: string
  story?: string
  image?: string
  link?: string
  author?: string
  children?: Array<Content>
}
