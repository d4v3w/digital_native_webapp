import { Article, User } from '../interfaces'

/** Dummy user data. */
export const userData: User[] = [
  { id: 'andy', name: 'Andy Williams' },
  { id: 'dave', name: 'Dave Williams' },
  { id: '', name: 'Guest' },
]

/** Dummy news data. */
export const newsData: Article[] = [
  {
    id: 1,
    title: 'Tune 1',
    author: {
      name: 'Andy Williams'
    },
    story: 'stuff...',
    date: new Date('2021-04-01').toString(),
  },
  {
    id: 2,
    title: 'Got signed',
    author: {
      name: 'Andy Williams'
    },
    story: 'stuff...',
    date: new Date('2021-03-01').toString(),
  },
  {
    id: 3,
    title: 'EP out soon',
    author: {
      name: 'Andy Williams'
    },
    story: 'stuff...',
    date: new Date('2021-02-01').toString(),
  },
  {
    id: 4,
    title: 'Twitch Live Stream',
    author: {
      name: 'Andy Williams'
    },
    story: 'stuff...',
    date: new Date('2021-01-01').toString(),
  },
]
