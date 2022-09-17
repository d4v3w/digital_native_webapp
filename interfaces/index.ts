export type User = {
  id?: string
  name: string
}

export type Content = {
  id: number
  type: string
  title: string
  summary: string
  story: string
  image?: string
  link?: string
  date: string
  author: User
}
