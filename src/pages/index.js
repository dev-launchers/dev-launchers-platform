import React from "react";
//import style from "./HomeRoute.module.css";
import Head from 'next/head'

      
import Header from "../components/common/Header";
import Home from "../components/modules/Home";
import Footer from "../components/common/Footer";

export default function Index() {
  React.useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    
    <div>
<Head>
        <meta property="og:title" content="Dev Launchers" key="title" />
            <meta property="og:description" content="Launching your imagination, to heights unimaginable" key="title" />

    
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
