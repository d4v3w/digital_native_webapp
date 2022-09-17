import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Content } from '../interfaces'
import { newsData } from '../utils/news-items'
import { GetStaticProps } from 'next/types'
import { NewsFeed, NewsFeedProps } from '../components/NewsFeed'
import Section from '../components/Section'
import Article from '../components/Article'
import Markdown from '../components/Markdown'

const MusicPage = ({ items }: NewsFeedProps): JSX.Element => (
  <Layout title="Music" className="music">
    <Article heading="Digital Native UK Music">
      <Markdown className="summary">Drum and Bass Producer from the Midlands, UK.</Markdown>
      <Markdown className="summary">
        With a sound on the deeper, liquid side of dnb, but not averse to more technical, jungly or darker styles and
        drawing influence from a broad musical taste, the focus is on creating a musical journey.
      </Markdown>
      <Markdown className="article">
        Expect old breaks, musicality, emotion and soul at the core of anything you hear from Digital Native with
        attention to the details.
      </Markdown>
      <Markdown className="article">
        Releases on Goldfat, Hospital, Glitch Audio, Beats In Mind, Silent Audio, Liquid Brilliants and SIMBAL
        Recordings. Self releases available to stream or download via Bandcamp and Soundcloud.
      </Markdown>
    </Article>
    <Hero />
    <Section className={'home'}>
      <NewsFeed
        items={items}
        filter="release"
        isHeadingHidden={true}
        isTextHidden={true}
        limit={6}
        order="asc"
        className="music-page-feed"
      />
    </Section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Content[] = newsData
  return { props: { items } }
}

export default MusicPage
