import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'

const montserrat = Montserrat({
  subsets:["latin"],
  variable :"--font-mont",
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
     <Head>
       <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <NavBar/>
      <Component {...pageProps} />
    </main>
    </>
   
  )
}
