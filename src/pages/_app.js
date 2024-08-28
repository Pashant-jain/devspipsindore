import Layout from "@/components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
