import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/index.scss";

import { Header, Footer } from "../components";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
        </Head>

        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
