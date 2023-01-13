import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheets } from '@mui/styles'

export default class MyDocument extends Document {
  static async getInitalProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets(),
    originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props)=> sheets.collect(<App {...props} />)
    });

    const initialProps = await Document.getInitialProps(ctx);

    return{
      ...initialProps,
      styles:[
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement()
      ]
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Documento de teste</title>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}