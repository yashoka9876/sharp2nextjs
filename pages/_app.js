import { MyContextProvider } from '../Context/Context';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return <MyContextProvider>
    <Component {...pageProps} />
  </MyContextProvider>
   
}

export default MyApp
