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
    story:
      'Welcome to the new all new Digital Native UK website! It has been a long time coming, but we finally have a website we are happy to call home :)',
    date: new Date('2022-03-02').toString(),
    image: '/images/artwork/036Cover.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 2,
    type: 'release',
    title: 'New Release Alert!',
    author: {
      name: 'Andy',
    },
    summary: 'Journey Through / Understated',
    story: 'New Release - Journey Through / Understated. The New Digital Native Release **Out Now!**',
    date: new Date('2022-09-10').toString(),
    image: '/images/artwork/GFR027-Artwork.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 5,
    type: 'news',
    title: 'Digital Native DJ Set',
    author: {
      name: 'Andy',
    },
    summary: 'Digital Native DJ set at XOYO, London!',
    story: 'Digital Native UKs will be playhing a show at XOYO. Come down and show some love for the Gldfat crew...',
    date: new Date('2022-04-15').toString(),
    image: '/images/news/goldfat-xoyo-london-digital-native.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 4,
    type: 'release',
    title: 'New Release Alert!',
    author: {
      name: 'Andy',
    },
    summary: 'Goldfat Full Fat **Out Now!**',
    story: 'New Release - Full Fat Release **Out Now!** - Get your copy from all your usual outlets.',
    date: new Date('2022-09-10').toString(),
    image: '/images/artwork/ARTWORK.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
  {
    id: 5,
    type: 'news',
    title: 'Happy Birthday Digital Native',
    author: {
      name: 'Andy',
    },
    summary: 'Digital Native UKs Birthday!',
    story: 'Digital Native UKs Birthday today! Stream a few tracks on Spotify to show some love.',
    date: new Date('2022-07-01').toString(),
    image: '/images/hero/digital_native_profile_portrait.jpg',
    link: 'https://www.digitalnativeuk.com/',
  },
]
