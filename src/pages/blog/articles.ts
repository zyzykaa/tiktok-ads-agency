// Helper to load all `.mdx` files dynamically at build time using Vite's import.meta.glob
export const articles = import.meta.glob('./articles/*.mdx', { eager: true });

export function getArticlesData() {
  const posts = Object.entries(articles).map(([path, module]: [string, any]) => {
    // Extract slug from filename (e.g., "./articles/hello-world.mdx" -> "hello-world")
    const slug = path.split('/').pop()?.replace('.mdx', '') || '';
    
    // MDX exports frontmatter mapping natively if configured, 
    // but without frontmatter-remark plugin, we will write a generic wrapper.
    // Assuming module has a standard export structure if using a generic plugin.
    
    return {
      slug,
      Component: module.default,
      // If we use MDX with frontmatter plugin later, metadata will be here:
      frontmatter: module.frontmatter || {}, 
    };
  });

  return posts;
}

export function getArticleBySlug(slug: string) {
  const posts = getArticlesData();
  return posts.find((p) => p.slug === slug);
}
