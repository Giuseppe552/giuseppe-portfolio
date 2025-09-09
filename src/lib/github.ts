

export type GHRepo = {
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  stargazers_count: number;
  homepage?: string;
  language?: string;
};

const GITHUB_USER = 'Giuseppe552';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

export async function getPortfolioRepos(): Promise<GHRepo[]> {
  const headers: Record<string, string> = {};
  if (process?.env?.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  // @ts-ignore: next property is supported in Next.js 14+ for ISR
  const res = await fetch(API_URL, {
    headers,
    next: { revalidate: 21600 },
  } as any);
  if (!res.ok) return [];
  const data = await res.json();
  return (data as any[])
    .filter(repo => repo.topics?.includes('portfolio'))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map(repo => ({
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      topics: repo.topics,
      stargazers_count: repo.stargazers_count,
      homepage: repo.homepage,
      language: repo.language,
    }));
}

export async function coverFor(repo: GHRepo): Promise<string> {
  const rawUrl = `https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/main/cover.png`;
  try {
    const res = await fetch(rawUrl, { method: 'HEAD' });
    if (res.ok) return rawUrl;
  } catch {}
  return `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repo.name}`;
}
