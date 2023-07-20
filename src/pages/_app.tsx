import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/organisms/Header/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Headerコンポーネントの追加
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
