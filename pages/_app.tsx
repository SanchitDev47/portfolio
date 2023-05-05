import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ScrollButton from '../Common/Elements/ScrollToTop'
import Footer from './Footer'
// import IndexApp from './indexApp'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ScrollButton />
      <Footer/>
      </ThemeProvider>
    </>
  )
}