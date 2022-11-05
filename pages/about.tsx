import Article from '../components/Article'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import portrait from '../public/images/hero/digital_native_profile_portrait.jpg'

const AboutPage = () => (
  <Layout title="About" className="about">
    <Article heading="About Digital Native" src={portrait.src}>
      <>
        <Markdown className="summary">Drum and Bass Producer from the Midlands, UK.</Markdown>
        <Markdown className="article">
          Based in the UK, Digital Native is a Drum and Bass producer known mainly for soulful, melodic dnb with a
          string of releases with Goldfat Records, Beats in Mind and Glitch Audio. Growing up on a mix of 60s rock to
          big band and playing multiple instruments, Digital Native draws influence from a broad musical palette. Having
          crafted a sound leading more towards the liquid end of dnb, more recent releases have allowed Digital Native
          to delve into heavier, darker vibes and old school influences. Regardless, musicality, emotion and soul are
          the root of all his music.
        </Markdown>
        <Markdown className="article">
          Aside from multiple releases on various labels the last couple of years have seen a remix for London
          Elekricity on Hospital Records and growing support including on Radio 1 and Kiss FM. Live shows, most notably
          at XOYO for the RAM30 celebrations, and guest mixes on the Hospital podcast and Rinse FM have also allowed
          Digital Native to dig deeper into the full spectrum of his Drum and Bass tastes and showcase his mixing
          talents.
        </Markdown>
      </>
    </Article>
  </Layout>
)

export default AboutPage
