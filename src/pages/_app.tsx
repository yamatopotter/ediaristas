import { useEffect } from 'react'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material'
import theme from 'ui/themes/theme'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() =>{
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
    <>
      <Head>
        <title>E-Diaristas</title>
        </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
