import { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
      <Script id="bing-analytics">
        {`
            (function(c,l,a,r,i,t,y) {
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    
              })(window, document, "clarity", "script", "dopn6mey0p");
          `}
      </Script>
    </ThemeProvider>
  )
}
