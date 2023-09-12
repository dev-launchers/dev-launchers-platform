import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import oldTheme from "../styles/theme";

const hashRedirect = (router) => {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (router.asPath.startsWith("/#")) {
    router.push(router.asPath.replace("/#", ""));
  }
};

function MyApp(props) {
  const router = useRouter();
  hashRedirect(router);

  return (
    <>
      <ThemeProvider theme={oldTheme}>
        <GlobalStyle />
        <div>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-599284852');
            `}
          </Script>
            <div>
              {/* <Component {...pageProps} /> */}
              {props.children}
            </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
