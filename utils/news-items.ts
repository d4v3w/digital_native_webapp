import { Content, User } from '../interfaces'

/** Dummy user data. */
export const userData: User[] = [
  { id: 'andy', name: 'Andy Williams' },
  { id: 'dave', name: 'Dave Williams' },
]

export const getUser = (id: string) => {
  return userData.find((obj) => {
    return obj.id === id
  })
}

export const getChildren = (type: string) => {
  return newsData.filter((obj) => {
    return obj.type === type
  })
}

/** Dummy news data. */
export const newsData: Content[] = [
  {
    id: 'home',
    type: 'page',
    title: 'New Digital Native Website',
    summary: 'Digital Native UK',
    date: '2022-10-01',
    author: 'andy',
    story: '',
    link: '',
    image: '',
    children: [],
  },
  {
    id: 'about',
    type: 'page',
    title: 'About Digital Native',
    summary: 'Drum and Bass Producer from the Midlands, UK.',
    story:
      'Based in the UK, Digital Native is a Drum and Bass producer known mainly for soulful, melodic dnb with a string        of releases with Goldfat Records, Beats in Mind and Glitch Audio. Growing up on a mix of 60s rock to big band        and playing multiple instruments, Digital Native draws influence from a broad musical palette. Having crafted a        sound leading more towards the liquid end of dnb, more recent releases have allowed Digital Native to delve into        heavier, darker vibes and old school influences. Regardless, musicality, emotion and soul are the root of all        his music.        Aside from multiple releases on various labels the last couple of years have seen a remix for London Elekricity        on Hospital Records and growing support including on Radio 1 and Kiss FM. Live shows, most notably at XOYO for the RAM30 celebrations, and guest mixes on the Hospital podcast and Rinse FM have also allowed Digital Native to        dig deeper into the full spectrum of his Drum and Bass tastes and showcase his mixing talents.',
    image: '/images/hero/digital_native_profile_portrait.jpg',
    date: '2022-10-01',
    author: 'andy',
    link: '',
    children: [],
  },
  {
    id: 'news',
    type: 'page',
    title: 'Digital Native Drum and Bass News Updates',
    author: 'andy',
    summary:
      'Digital Native UK Drum and Bass - News, Events, Updates, Exclusives',
    date: '2022-10-01',
    story: '',
    link: '',
    image: '',
    children: [],
  },
  {
    id: 'music',
    type: 'page',
    title: 'New Digital Native Website Music',
    author: 'andy',
    summary: 'Drum and Bass Producer from the Midlands, UK.',
    story:
      'With a sound on the deeper, liquid side of dnb, but not averse to more technical, jungly or darker styles and        drawing influence from a broad musical taste, the focus is on creating a musical journey.             Expect old breaks, musicality, emotion and soul at the core of anything you hear from Digital Native with        attention to the details.        Releases on Goldfat, Hospital, Glitch Audio, Beats In Mind, Silent Audio, Liquid Brilliants and SIMBAL        Recordings. Self releases available to stream or download via Bandcamp and Soundcloud.',
    date: '2022-10-01',
    link: '',
    image: '',
    children: [],
  },
  {
    id: 'production',
    type: 'page',
    title: 'New Digital Native Website',
    author: 'andy',
    summary: 'Digital Native UK',
    story:
      'In this section youll find tutorials, samples and resources that will hopefully help you in your own production journey. Check out the links below to navigate quickly to section you need.         Steinberg Cubase        | Native Instruments        | Drum & Bass        | Production',
    link: 'https://www.youtube.com/user/MrBeatbully/featured',
    date: '2022-10-01',
    children: [],
  },
  {
    id: '1',
    type: 'news',
    title: 'New Digital Native Website is Live',
    author: 'andy',
    summary: 'Digital Native UK',
    story:
      'Welcome to the new all new Digital Native UK website! It has been a long time coming, but we finally have a website we are happy to call home :)',
    date: '2022-03-02',
    image: '/images/artwork/036Cover.jpg',
    link: 'https://www.digitalnativeuk.com/',
    children: [],
  },
  {
    id: '2',
    type: 'music',
    title: 'New Release Alert!',
    author: 'andy',
    summary: 'Journey Through / Understated',
    story:
      'New Release - Journey Through / Understated. The New Digital Native Release **Out Now!**',
    date: '2022-09-10',
    image: '/images/artwork/GFR027-Artwork.jpg',
    link: 'https://www.digitalnativeuk.com/',
    children: [],
  },
  {
    id: '3',
    type: 'news',
    title: 'Digital Native DJ Set',
    author: 'andy',
    summary: 'Digital Native DJ set at XOYO, London!',
    story:
      'Digital Native UKs will be playhing a show at XOYO. Come down and show some love for the Gldfat crew...',
    date: '2022-04-15',
    image: '/images/news/goldfat-xoyo-london-digital-native.jpg',
    link: 'https://www.digitalnativeuk.com/',
    children: [],
  },
  {
    id: '4',
    type: 'music',
    title: 'New Release Alert!',
    author: 'andy',
    summary: 'Goldfat Full Fat **Out Now!**',
    story:
      'New Release - Full Fat Release **Out Now!** - Get your copy from all your usual outlets.',
    date: '2022-09-10',
    image: '/images/artwork/ARTWORK.jpg',
    link: 'https://goldfat.bandcamp.com/album/full-fat-01',
    children: [],
  },
  {
    id: '5',
    type: 'news',
    title: 'Happy Birthday Digital Native',
    author: 'andy',
    summary: 'Digital Native UKs Birthday!',
    story:
      'Digital Native UKs Birthday today! Stream a few tracks on Spotify to show some love.',
    date: '2022-07-01',
    image: '/images/hero/digital_native_profile_portrait.jpg',
    link: 'https://www.digitalnativeuk.com/',
    children: [],
  },
  {
    id: '6',
    type: 'music',
    title: 'New Release Alert!',
    author: 'andy',
    summary: 'Distant E.P. **Out Now!**',
    story:
      'New Release - Distant E.P. **Out Now!** - Stream on Spotify, iTunes, YouTube Music.',
    date: '2022-05-10',
    image: '/images/artwork/SR001-Distant-EP-Cover-white.png',
    link: 'https://goldfat.bandcamp.com/album/full-fat-01',
    children: [],
  },
  {
    id: '7',
    type: 'news',
    title: 'Live at XOYO - Part 1',
    author: 'andy',
    summary: 'Live at XOYO London / Photos - Part 1',
    story: 'What a fantastic night with the Goldfat crew,',
    date: '2022-04-22',
    image: '/images/live/GoldfatXoyo-9.jpg',
    link: 'https://www.xoyo.co.uk/whats-on/',
    children: [],
  },
  {
    id: '8',
    type: 'news',
    title: 'Live at XOYO - Part 2',
    author: 'andy',
    summary: 'Live at XOYO London / Photos - Part 2',
    story: 'What a fantastic night with the Goldfat crew,',
    date: '2022-04-22',
    image: '/images/live/GoldfatXoyo-10.jpg',
    link: 'https://www.xoyo.co.uk/whats-on/',
    children: [],
  },
  {
    id: '9',
    type: 'news',
    title: 'Live at XOYO - Part 3',
    author: 'andy',
    summary: 'Live at XOYO London / Photos - Part 3',
    story: 'What a fantastic night with the Goldfat crew,',
    date: '2022-04-22',
    image: '/images/live/GoldfatXoyo-15.jpg',
    link: 'https://www.skiddle.com/whats-on/London/XOYO/RAM30--XOYO-Week-2/36015037/',
    children: [],
  },
  {
    id: '10',
    type: 'music',
    title: 'New Release Alert!',
    author: 'andy',
    summary: 'Rabbit Hole EP',
    story:
      'New Release - Rabbit Hole EP. The New Digital Native Release **Out Now!**',
    date: '2022-02-25',
    image: '/images/artwork/036Cover.jpg',
    link: 'https://goldfat.bandcamp.com/album/rabbit-hole-ep',
    children: [],
  },
  {
    id: '11',
    type: 'production',
    title: 'Forever and Ever | Track Breakdown',
    author: 'andy',
    summary: 'Forever and Ever | Track Breakdown and Production Tutorial',
    date: '2022-10-01',
    link: 'https://www.youtube.com/watch?v=KIdN4IszoVE&t',
    story: '',
    image: '',
    children: [],
  },
  {
    id: '12',
    type: 'production',
    title: `London Elektricity - 'Possible Worlds' ft. Inja (Digital Native Remix)`,
    author: 'andy',
    summary: `London Elektricity - 'Possible Worlds' ft. Inja (Digital Native Remix) Track Breakdown and Production Tutorial`,
    date: '2022-10-01',
    link: 'https://www.youtube.com/watch?v=vp1Z3z59Mlk',
    story: '',
    image: '',
    children: [],
  },
  {
    id: '13',
    type: 'production',
    title: 'Journey Through | Track Breakdown',
    author: 'andy',
    summary: 'Journey Through | Track Breakdown and Production Tutorial',
    date: '2022-10-01',
    link: 'https://www.youtube.com/watch?v=3SwZjXyKlbg&t',
    story: '',
    image: '',
    children: [],
  },
]
