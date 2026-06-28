import { BlogCategory } from "./blogPosts";

interface CategoryConfig {
  /** i18n key under "Blog.categories" */
  labelKey: string;
  color: string;
  /** CSS gradient used as a fallback cover when a post has no image */
  gradient: string;
}

export const categoryConfig: Record<BlogCategory, CategoryConfig> = {
  ai: {
    labelKey: "ai",
    color: "#4db5ff",
    gradient: "linear-gradient(135deg, #4db5ff 0%, #7b61ff 100%)",
  },
  technology: {
    labelKey: "technology",
    color: "#2dd4bf",
    gradient: "linear-gradient(135deg, #2dd4bf 0%, #3b82f6 100%)",
  },
  career: {
    labelKey: "career",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #fbbf24 0%, #fb7185 100%)",
  },
  travel: {
    labelKey: "travel",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399 0%, #06b6d4 100%)",
  },
};

export const blogCategories: BlogCategory[] = [
  "ai",
  "technology",
  "career",
  "travel",
];
