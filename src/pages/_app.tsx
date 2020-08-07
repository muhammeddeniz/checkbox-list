import React from "react";
import App from "next/app";
import Head from "next/head";
import Store from "../store/store";

const store = new Store();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
        </Head>

        <Component {...pageProps} store={store} />
      </>
    );
  }
}

export default MyApp;
