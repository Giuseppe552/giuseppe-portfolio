# Copilot Instructions for giuseppegiona.com

Welcome to the `giuseppegiona.com` codebase! This document provides essential guidance for AI coding agents to be productive in this repository.

---

## 🏗️ Project Overview

This repository powers [giuseppegiona.com](https://giuseppegiona.com), a personal portfolio and blog. It is built with:

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- Hosted on **Vercel**

Key features include:
- A portfolio showcasing projects.
- A blog with articles on software development, security, and growth.
- Responsive and performance-focused design.

---

## 📂 Key Directories

- `src/app/` - Contains the main application logic, including pages and API routes.
  - `blog/` - Blog-related pages and markdown posts.
  - `projects/` - Portfolio project pages.
- `components/` - Reusable UI components (e.g., `Header`, `SiteFooter`).
- `lib/` - Utility functions (e.g., `github.ts` for GitHub API interactions).
- `public/` - Static assets (e.g., images, fonts).

---

## 🛠️ Developer Workflows

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Linting and Type Checking

Run ESLint and TypeScript checks:
```bash
npm run lint
```

### Building for Production

Build the project locally:
```bash
npm run build
```

### Testing

- No explicit test framework is configured. Ensure manual testing for critical changes.

---

## 🔑 Project-Specific Conventions

- **Markdown Blog Posts**: Blog posts are written in markdown and stored in `src/app/blog/`.
- **Dynamic Routing**: Uses Next.js dynamic routes (e.g., `[slug]` for blog posts).
- **TailwindCSS**: Follow the utility-first CSS approach.
- **GitHub API Integration**: Utilities in `lib/github.ts` interact with GitHub repositories.

---

## 🌐 Deployment

- **Vercel**: Automatic deployments for `main` and preview deployments for pull requests.

---

## 🔗 External Dependencies

- **Framer Motion**: Used for animations.
- **GitHub API**: Fetches repository data for portfolio projects.

---

## 🧠 Tips for AI Agents

- **Understand the Architecture**: Familiarize yourself with the `src/app/` structure and dynamic routing in Next.js.
- **Follow TailwindCSS Patterns**: Use existing utility classes and avoid inline styles.
- **Respect Security Practices**: Ensure changes do not compromise security headers or CI checks.
- **Leverage Reusable Components**: Check `components/` for existing UI elements before creating new ones.

---

For questions or clarifications, refer to the [README.md](../README.md) or open an issue.