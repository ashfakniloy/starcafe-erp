import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StarCafe admin panel</title>
        <meta name="description" content="star cafe" />
        <meta name="keywords" content="star cafe" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
