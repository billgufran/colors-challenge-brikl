import Head from "next/head";
import type { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Colors Challenge</title>
        <meta name="description" content="Submission for Brikl Frontend - React, TypeScript position" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
