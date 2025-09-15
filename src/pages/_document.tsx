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
          {/*
            Security: SRI and nonce usage for government-level compliance
            - Use nonce for any inline <style> or <script> tags
            - Use integrity attribute for external resources (SRI)
          */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=JetBrains+Mono"
            integrity="sha384-PqMYaMj8pDGJDqM8sEx522DXjPB0qdZtE2AmycyCw5iIDEzcoSGUuF56ifJgLbtr"
            crossOrigin="anonymous"
          />
          {/* Example of nonce usage for inline style */}
          <style nonce={nonce}>{`body { background: #fff; }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
