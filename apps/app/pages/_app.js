import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
          ></script>
        </Head>

        <div className="App">
          <ToastContainer
            className="toast-container"
            toastClassName="toast"
            progressClassName="toast-progress"
          />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
