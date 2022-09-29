import PrimarySearchAppBar from '../components/Navbar'
import '../styles/globals.css'
import { DataProvider } from '../context/data.context'
<<<<<<< HEAD
import { AuthProvider } from "../context/auth.context"
=======
import PrimarySearchAppBar from '../components/NavBar';
import StickyFooter from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
    <AuthProvider>
      <PrimarySearchAppBar />
      <Component {...pageProps} />
    </AuthProvider>
    </DataProvider>
  )
}

export default MyApp
