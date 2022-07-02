import Layout from '../components/Layout'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../components/layout.module.css'
import heroImage from '../public/images/hero/digital_native_profile_portrait.jpg'

const IndexPage = (): JSX.Element => (
  <Layout title="Home" className="flex">
    <article className={styles.article}>
      <Image
        src={heroImage}
        alt="Digital Native: Drum and Bass Producer"
        width={512}
        height={512}
        layout={'responsive'}
        priority={true}
      />
      <h1 className={styles.headingPrimary}>Digital Native UK</h1>
      <p>
        Releases on Goldfat, Hospital, Glitch Audio, Beats In Mind, Silent Audio, Liquid Brilliants and SIMBAL
        Recordings. Self releases available to stream or download via Bandcamp and Soundcloud.
      </p>
      <Hero />
    </article>
  </Layout>
)

export default IndexPage
