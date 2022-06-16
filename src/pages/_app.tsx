import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DataCartProvider } from '../context/useDataCart'
import { ThemeProvider } from '@mui/material'
import { light } from '../styles/light'
import { AppThemeProvider } from '../context/useTheme'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <DataCartProvider>
      <AppThemeProvider >
        <Component {...pageProps} />
      </AppThemeProvider>
    </DataCartProvider>
  </>
}

export default MyApp
