import { apiClient } from "@/utils/apiClient";
import { BlogPostEntity } from "../entities/blog-post.entity";
import { IGetBlogPostsParams } from "../interfaces/IGetBlogPostsParams";

export type BlogPostData = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export const getBlogPosts = async (
  getBlogPostsParams?: IGetBlogPostsParams
) => {
  const response: BlogPostData[] = await apiClient.get(
    "/blog-post",
    getBlogPostsParams
  );
  return response.map(({ id, content, created_at, title, updated_at }) => {
    return new BlogPostEntity({ id, content, created_at, title, updated_at });
  });
};
