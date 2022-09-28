import PrimarySearchAppBar from '../components/Navbar'
import '../styles/globals.css'
import PrimarySearchAppBar from '../components/NavBar';
import StickyFooter from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <PrimarySearchAppBar />
      <Component {...pageProps} />

    </>

  )
}

export default MyApp
