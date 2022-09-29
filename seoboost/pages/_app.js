import '../styles/globals.css'
import { DataProvider } from '../context/data.context'
import { AuthProvider } from "../context/auth.context"
import ResponsiveAppBar from '../components/NavBar';



function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <AuthProvider>
        <ResponsiveAppBar />
        <Component {...pageProps} />
      </AuthProvider>
    </DataProvider>
  )
}

export default MyApp
