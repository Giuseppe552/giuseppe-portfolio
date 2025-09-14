import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import crypto from 'crypto';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // Generate a random nonce for each request
    const nonce = crypto.randomBytes(16).toString('base64');
    return { ...initialProps, nonce };
  }

  render() {
    const nonce = this.props.nonce;
    return (
      <Html>
        <Head>
          {/* Inject nonce into all style and script tags */}
          <meta httpEquiv="Content-Security-Policy" content={`default-src 'self'; script-src 'self' https://www.googletagmanager.com 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'; object-src 'none'; base-uri 'self';`} />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
