// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id?: string
  name: string
}

export type Article = {
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
