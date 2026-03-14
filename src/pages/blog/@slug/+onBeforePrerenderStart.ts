import { getArticlesData } from '../articles';

export async function onBeforePrerenderStart() {
  const articles = await getArticlesData();
  return articles.map((article) => `/blog/${article.slug}`);
}
