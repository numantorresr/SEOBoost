import PrimarySearchAppBar from '../components/Navbar'
import '../styles/globals.css'
import { DataProvider } from '../context/data.context'



function MyApp({ Component, pageProps }) {
  return (

    <DataProvider>
      <PrimarySearchAppBar />
      <Component {...pageProps} />
    </DataProvider>


  )
}

export default MyApp
