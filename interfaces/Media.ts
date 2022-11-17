export type Media = {
  title: string
  description: string
  url: string
  width: number
  height: number
}
export interface MediaCollection {
  total: number
  items: Media[]
}
