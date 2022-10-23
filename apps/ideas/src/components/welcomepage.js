import render from 'dom-serializer';
import React from 'react';
import SubmitIdea from '../components/SubmitIdea/SubmitIdea';
import Grid from '@mui/material/Grid';

import ReactGA from "react-ga";






export default function WelcomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

        <head>
          {/* <!-- Google Tag Manager --> */}
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMZNFSB');</script>
          {/* <!-- End Google Tag Manager --> */}

          {/* <!-- Hotjar Tracking Code for https://devlaunchers.org/ideas --> */}
          <script>
          (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3188526,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
        </head>

        <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMZNFSB"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <div id="welcomeWrapper">
          <h1 style={{width:"100%",textAlign:"center"}}>
            IdeaSpace (Beta)
          </h1>
          <SubmitIdea />
        </div>

        </body>

      </Grid>
    </Grid>
  )
}