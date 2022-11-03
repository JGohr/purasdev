import Header from '../comps/Header';
import Footer from '../comps/Footer';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>);
}

export default MyApp
