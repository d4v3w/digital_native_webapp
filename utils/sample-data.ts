import { Article, User } from '../interfaces'

/** Dummy user data. */
export const userData: User[] = [
  { id: 'andy', name: 'Andy' },
  { id: 'dave', name: 'Dave' },
  { id: '', name: 'Guest' },
]

/** Dummy news data. */
export const newsData: Article[] = [
  {
    id: 1,
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Dave'
    },
    story: 'Welcome to the new Digital Native website!',
    date: new Date('2022-03-02').toString(),
  },
]
