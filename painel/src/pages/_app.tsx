import { AppProvider } from '../data/context/AppContext'
import '../styles/globals.css'

function Prodam({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default Prodam
