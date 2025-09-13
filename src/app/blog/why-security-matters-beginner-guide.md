---
title: "Why Security Headers Matter (Beginner Guide)"
date: "2025-09-13"
tags: ["security", "web", "beginner"]
repo: "Giuseppe552/giuseppe-portfolio"
---

# Why Security Headers Matter (Beginner Guide)

When I first launched [giuseppegiona.com](https://giuseppegiona.com), my goal was simple: showcase my projects and blog. But as soon as I ran a basic security scan, I discovered something surprising — my site was missing critical HTTP security headers.

That’s when I learned that security headers are not just *nice-to-haves*. They are the first line of defense against common web attacks like clickjacking, XSS, and MIME-sniffing. Let me explain.

## 🛡️ What Are Security Headers?

Security headers are simple instructions that a server sends to a browser, telling it how to handle content. They don’t require rewriting your app logic, but they dramatically reduce risk.

Here are some of the most important ones:

| Header                    | What it Does                                                | Risk if Missing                                |
|---------------------------|------------------------------------------------------------|------------------------------------------------|
| Content-Security-Policy   | Restricts what scripts, styles, and content can run.       | Attackers can inject malicious JavaScript.     |
| X-Frame-Options           | Stops your site being embedded in an `<iframe>`.           | Protects against clickjacking attacks.         |
| X-Content-Type-Options    | Prevents browsers from MIME-sniffing file types.           | Stops malicious content being executed wrongly.|
| Strict-Transport-Security | Forces HTTPS on all connections.                           | Prevents downgrade attacks & insecure redirects|
| Referrer-Policy           | Controls how much referrer info is shared with other sites.| Reduces information leakage via links.         |
| Permissions-Policy        | Restricts APIs like camera, microphone, geolocation.        | Prevents abusive use of browser features.      |

## 🚨 What I Found on My Site

When I scanned my own site, some headers were missing. That meant, in theory:

- Someone could frame my site and trick visitors into clicking hidden buttons.
- JavaScript injected by a malicious ad network could run in the browser.
- Visitors’ data could leak to third parties through referrer headers.

Not exactly the impression I wanted to leave on recruiters or clients!

## ✅ How I Fixed It

I implemented the following secure defaults:

```javascript
// next.config.mjs (example)
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src https://www.youtube.com https://player.vimeo.com;"
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

export default {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};
```

Now when I re-scan my site, every critical header is in place.

## ✍️ Takeaway

If you run any kind of website — even a personal portfolio like mine — you’re responsible for protecting visitors. Security headers are one of the easiest wins in web security: no extra libraries, no refactor, just smart configuration.

They don’t just protect your users. They protect you — your reputation, your credibility, and your future opportunities.
