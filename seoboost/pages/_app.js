import PrimarySearchAppBar from '../components/Navbar'
import '../styles/globals.css'
import { AuthProvider } from "../context/auth.context"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PrimarySearchAppBar />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
