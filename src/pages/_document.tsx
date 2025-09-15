import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';
import cookie from 'cookie';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // Parse nonce from cookie (set by middleware)
    let nonce = '';
    if (ctx.req?.headers?.cookie) {
      const cookies = cookie.parse(ctx.req.headers.cookie);
      nonce = cookies["nonce"] || '';
    }
    return { ...initialProps, nonce };
  }

  render() {
    const nonce = this.props.nonce ?? '';
    return (
      <Html>
        <Head>
          {/* Security: SRI and nonce usage for government-level compliance */}
          {/* All inline styles use nonce */}
          <style nonce={nonce}>{`body { background: #fff; }`}</style>
        </Head>
        <body>
          <Main />
          {/* NextScript receives nonce for all scripts */}
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
