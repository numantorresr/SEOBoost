import PrimarySearchAppBar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PrimarySearchAppBar />
      <Component {...pageProps} />

    </>

  )
}

export default MyApp
