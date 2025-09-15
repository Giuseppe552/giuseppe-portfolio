import Document, { Html, Head, Main, DocumentContext, NextScript as DefaultNextScript } from 'next/document';
import React from 'react';
import { DocumentProps } from 'next/document';
import cookie from 'cookie';

class CustomNextScript extends React.Component<{ nonce: string }> {
  render() {
    // Render all Next.js scripts with nonce
    // This covers __NEXT_DATA__, hydration, and all Next.js-injected scripts
    // See: https://github.com/vercel/next.js/issues/31792
    // We override render to inject nonce into every <script>
    // @ts-ignore
    const scripts = DefaultNextScript.prototype.render.call(this);
    // Recursively inject nonce into all <script> tags
    function injectNonce(node: any, nonce: string): any {
      if (!node) return node;
      if (Array.isArray(node)) return node.map(child => injectNonce(child, nonce));
      if (node.type === 'script') {
        return React.cloneElement(node, { nonce });
      }
      if (node.props && node.props.children) {
        return React.cloneElement(node, {
          children: injectNonce(node.props.children, nonce)
        });
      }
      return node;
    }
    return injectNonce(scripts, this.props.nonce);
  }
}

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
          />
          {/* Example of nonce usage for inline style */}
          <style nonce={nonce}>{`body { background: #fff; }`}</style>
        </Head>
        <body>
          <Main />
          <CustomNextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
