import { Content } from './Content'

export interface ApiResponse {
  total: number
  items: Content[]
  errors?: string | string[] | undefined
}
