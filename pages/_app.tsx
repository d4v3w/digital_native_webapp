import { AppProps } from 'next/app'
import { wrapper } from '../app/store'
import { Analytics } from '../components/Analytics'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default wrapper.withRedux(App)
