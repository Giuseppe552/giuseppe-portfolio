
import { getPortfolioRepos } from "@/lib/github";

export default async function sitemap() {
  const baseUrl = "https://giuseppegiona.com";
  const repos = await getPortfolioRepos();
  const pages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    // Add each project detail page
    ...repos.map(repo => ({
      url: `${baseUrl}/projects/${repo.name}`,
      lastModified: new Date(),
    })),
  ];
  return pages;
}
