import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
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
    const nonce = this.props.nonce;
    return (
      <Html>
        <Head>
          {/* Use nonce on any custom inline style or script tags if needed */}
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
