import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DataCartProvider } from '../context/useDataCart'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <DataCartProvider>

      <Component {...pageProps} />
    </DataCartProvider>
  </>
}

export default MyApp
