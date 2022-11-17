export type ContentOld = {
  id: string
  type: string
  title: string
  date: string
  summary?: string | undefined
  story?: string | undefined
  image?: string | undefined
  link?: string | undefined
  author?: string
  children?: Array<ContentOld>
}
