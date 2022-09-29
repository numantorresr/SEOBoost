import PrimarySearchAppBar from '../components/Navbar'
import '../styles/globals.css'
<<<<<<< HEAD
import { AuthProvider } from "../context/auth.context"
=======
import PrimarySearchAppBar from '../components/NavBar';
import StickyFooter from '../components/Footer';

>>>>>>> d881d40293c85a2529bfa58bbdf4e3d577bcd067

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PrimarySearchAppBar />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
