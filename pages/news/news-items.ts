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
      name: 'Andy',
    },
    story:
      'Welcome to the new all new Digital Native UK website! You are the first time experience history first hand.',
    date: new Date('2022-03-02').toString(),
    image: 'https://www.digitalnativeuk.com/public/images/artwork/ARTWORK.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 2,
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    story:
      'Welcome to the new all new Digital Native UK website! You are the first time experience history first hand.',
    date: new Date('2022-07-01').toString(),
    image: 'https://www.digitalnativeuk.com/public/images/artwork/ARTWORK.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 3,
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    story:
      'Welcome to the new all new Digital Native UK website! You are the first time experience history first hand.',
    date: new Date('2022-09-02').toString(),
    image: 'https://www.digitalnativeuk.com/public/images/artwork/ARTWORK.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
]
