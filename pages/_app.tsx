import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { wrapper } from '../app/store'
import { Analytics } from '../components/Analytics'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)
