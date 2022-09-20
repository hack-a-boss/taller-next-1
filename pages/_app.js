import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Layout>
        <NavBar />
        {page}
      </Layout>
    ));
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
