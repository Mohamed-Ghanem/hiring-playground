import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { appName } from '@services';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Celfocus! {appName()}</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Cellfocus PWA" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
