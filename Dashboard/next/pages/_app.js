import Siderbar from '@/components/Siderbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Siderbar>
      <Component {...pageProps} />
    </Siderbar>
  )
}
