import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Portfólio | João B. - Front-end developer and UI designer" />
          <meta name="description" content="Hey there, my name is João, But you can call me juniorjblp.
          I'm a C# and .NET developer from Brazil. 
          But sometimes I also love working with frontend & mobile development.." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfólio | João B. - Front-end developer and UI designer" />
          <meta property="og:description" content="Hey there, my name is João, But you can call me juniorjblp.
          I'm a C# and .NET developer from Brazil. 
          But sometimes I also love working with frontend & mobile development.." />
          <meta property="og:image" content="https://www.juniorjblp.ga/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Portfólio | João B. - Front-end developer and UI designer" />
          <meta property="twitter:description" content="Hey there, my name is João, But you can call me juniorjblp.
          I'm a C# and .NET developer from Brazil. 
          But sometimes I also love working with frontend & mobile development.." />
          <meta property="twitter:image" content="https://www.juniorjblp.ga/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
