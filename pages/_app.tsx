import type { AppProps } from 'next/app'
import { GlobalStyle } from '../globalStyle';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp