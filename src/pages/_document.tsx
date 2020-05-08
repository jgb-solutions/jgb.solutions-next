import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="ut8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />

          <link rel="icon" sizes="192x192" type="image/png" href="/assets/icons/android-icon-192x192-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114-dunplab-008.png" />
          <link rel="icon" sizes="96x96" type="image/png" href="/assets/icons/favicon-96x96-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60-dunplab-008.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57-dunplab-008.png" />
          <link rel="icon" sizes="32x32" type="image/png" href="/assets/icons/favicon-32x32-dunplab-008.png" />
          <link rel="icon" sizes="16x16" type="image/png" href="/assets/icons/favicon-16x16-dunplab-008.png" />

          {/* <script dangerouslySetInnerHTML={{
            __html: `
              window.onload = function(e) {
                loadAdAndPushcripts()
              }

              function loadAdAndPushcripts() {
                if (!document.querySelectorAll('.adsense-script').length) {
                  var adsense = document.createElement("script");
                  adsense.className = "adsense-script";
                  adsense.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                  adsense.setAttribute('data-ad-client', "ca-pub-7203147191748397")
                  document.body.appendChild(adsense);
                }
              }
            `
          }} /> */}
        </Head>
        <body className="bg-grey font-sans leading-normal antialiased">
          <Main />
          <NextScript />

          {/* {process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-81362147-3"></script>
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-81362147-3');
                `
              }} />
            </>
          )} */}
        </body>
      </Html>
    )
  }
}