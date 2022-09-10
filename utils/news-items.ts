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
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    summary: 'Digital Native UK',
    story: 'Welcome to the new all new Digital Native UK website!',
    date: new Date('2022-03-02').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 2,
    type: 'news',
    title: 'Happy Birthday Digital Native',
    author: {
      name: 'Andy',
    },
    summary: 'Digital Native UKs Birthday!',
    story: 'Digital Native UKs Birthday!',
    date: new Date('2022-07-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 3,
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    summary: '',
    story: 'Welcome to the new all new Digital Native UK website!',
    date: new Date('2022-09-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 4,
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    summary: '',
    story: 'Welcome to the new all new Digital Native UK website!',
    date: new Date('2022-09-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 5,
    type: 'release',
    title: 'New Release Full Fat',
    author: {
      name: 'Andy',
    },
    summary: 'Full Fat',
    story: 'Full Fat Release **Out Now!**',
    date: new Date('2022-09-10').toString(),
    image: '/images/artwork/ARTWORK.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 6,
    type: 'release',
    title: 'New Release Understated',
    author: {
      name: 'Andy',
    },
    summary: 'Understated',
    story: 'Understated the New Digital Native Release **Out Now!**',
    date: new Date('2022-09-10').toString(),
    image: '/images/artwork/GFR027-Artwork.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 7,
    type: 'news',
    title: 'Happy Birthday Digital Native',
    author: {
      name: 'Andy',
    },
    summary: 'Digital Native UKs Birthday!',
    story: 'Digital Native UKs Birthday!',
    date: new Date('2022-07-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 8,
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    summary: '',
    story: 'Welcome to the new all new Digital Native UK website!',
    date: new Date('2022-09-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 9,
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    summary: '',
    story: 'Welcome to the new all new Digital Native UK website!',
    date: new Date('2022-09-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 10,
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: {
      name: 'Andy',
    },
    summary: '',
    story: 'Welcome to the new all new Digital Native UK website!',
    date: new Date('2022-09-01').toString(),
    image: '',
    link: 'https://www.digitalnativeuk.com/',
  },
]
