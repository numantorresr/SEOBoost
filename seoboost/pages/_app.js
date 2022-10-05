import '../styles/globals.css'
import { DataProvider } from '../context/data.context'
import { AuthProvider } from "../context/auth.context"
import ResponsiveAppBar from '../components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themeConfig';


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar />
          <Component {...pageProps} />

        </ThemeProvider>
      </AuthProvider>
    </DataProvider>
  )
}

export default MyApp
