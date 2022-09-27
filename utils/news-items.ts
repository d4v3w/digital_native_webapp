import { Content, User } from '../interfaces'

/** Dummy user data. */
export const userData: User[] = [
  { id: 'andy', name: 'Andy Williams' },
  { id: 'dave', name: 'Dave Williams' },
]

/** Dummy news data. */
{/* prettier-ignore */}
export const newsData: Content[] = [
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
    type: 'music',
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
    id: 3,
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
    type: 'music',
    title: 'New Release Alert!',
    author: {
      name: 'Andy',
    },
    summary: 'Goldfat Full Fat **Out Now!**',
    story: 'New Release - Full Fat Release **Out Now!** - Get your copy from all your usual outlets.',
    date: new Date('2022-09-10').toString(),
    image: '/images/artwork/ARTWORK.jpg',
    link: 'https://goldfat.bandcamp.com/album/full-fat-01',
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
  {
    id: 6,
    type: 'music',
    title: 'New Release Alert!',
    author: {
      name: 'Andy',
    },
    summary: 'Distant E.P. **Out Now!**',
    story: 'New Release - Distant E.P. **Out Now!** - Stream on Spotify, iTunes, YouTube Music.',
    date: new Date('2022-05-10').toString(),
    image: '/images/artwork/SR001-Distant-EP-Cover-white.png',
    link: 'https://goldfat.bandcamp.com/album/full-fat-01',
  },
  {
    id: 7,
    type: 'news',
    title: 'Live at XOYO - Part 1',
    author: {
      name: 'Andy',
    },
    summary: 'Live at XOYO London / Photos - Part 1',
    story: 'What a fantastic night with the Goldfat crew,',
    date: new Date('2022-04-22').toString(),
    image: '/images/live/GoldfatXoyo-9.jpg',
    link: 'https://www.xoyo.co.uk/whats-on/',
  },
  {
    id: 8,
    type: 'news',
    title: 'Live at XOYO - Part 2',
    author: {
      name: 'Andy',
    },
    summary: 'Live at XOYO London / Photos - Part 2',
    story: 'What a fantastic night with the Goldfat crew,',
    date: new Date('2022-04-22').toString(),
    image: '/images/live/GoldfatXoyo-10.jpg',
    link: 'https://www.xoyo.co.uk/whats-on/',
  },
  {
    id: 9,
    type: 'news',
    title: 'Live at XOYO - Part 3',
    author: {
      name: 'Andy',
    },
    summary: 'Live at XOYO London / Photos - Part 3',
    story: 'What a fantastic night with the Goldfat crew,',
    date: new Date('2022-04-22').toString(),
    image: '/images/live/GoldfatXoyo-15.jpg',
    link: 'https://www.skiddle.com/whats-on/London/XOYO/RAM30--XOYO-Week-2/36015037/',
  },
  {
    id: 10,
    type: 'music',
    title: 'New Release Alert!',
    author: {
      name: 'Andy',
    },
    summary: 'Rabbit Hole EP',
    story: 'New Release - Rabbit Hole EP. The New Digital Native Release **Out Now!**',
    date: new Date('2022-02-25').toString(),
    image: '/images/artwork/036Cover.jpg',
    link: 'https://goldfat.bandcamp.com/album/rabbit-hole-ep',
  },
]
