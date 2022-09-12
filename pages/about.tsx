import Layout from '../components/Layout'
import styles from '../components/layout.module.css'
import utilStyles from '../components/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import heroImage from '../public/images/hero/digital_native_profile_portrait.jpg'

const AboutPage = (): JSX.Element => (
  <Layout title="About">
    <main>
      <section>
        <article className={styles.article}>
          <h1 className={styles.headingPrimary}>About Digital Native</h1>
          <p>Drum and Bass Producer from the Midlands, UK.</p>
          <div className={utilStyles.floatImgL}>
            <Image
              src={heroImage}
              alt="Digital Native: Drum and Bass Producer"
              width={360}
              height={360}
              layout={'fixed'}
              priority={true}
            />
          </div>
          <p>
            Based in the UK, Digital Native is a Drum and Bass producer known mainly for soulful, melodic dnb with a
            string of releases with Goldfat Records, Beats in Mind and Glitch Audio.
          </p>
          <p>
            Growing up on a mix of 60s rock to big band and playing multiple instruments, Digital Native draws influence
            from a broad musical palette. Having crafted a sound leading more towards the liquid end of dnb, more recent
            releases have allowed Digital Native to delve into heavier, darker vibes and old school influences.
            Regardless, musicality, emotion and soul are the root of all his music.
          </p>
          <p>
            Aside from multiple releases on various labels the last couple of years have seen a remix for London
            Elekricity on Hospital Records and growing support including on Radio 1 and Kiss FM. Live shows, most
            notably at XOYO for the RAM30 celebrations, and guest mixes on the Hospital podcast and Rinse FM have also
            allowed Digital Native to dig deeper into the full spectrum of his Drum and Bass tastes and showcase his
            mixing talents.
          </p>
          <p>
            <Link href="https://digitalnativeuk.bandcamp.com" passHref>
              <a>Bandcamp: digitalnativeuk</a>
            </Link>
            <br />
            <Link href="https://soundcloud.com/digitalnativeuk" passHref>
              <a>Soundcloud: digitalnativeuk</a>
            </Link>
            <br />
            <Link href="https://www.facebook.com/digitalnativeuk" passHref>
              <a>Facebook: digitalnativeuk</a>
            </Link>
          </p>
        </article>
      </section>
    </main>
  </Layout>
)

export default AboutPage
