import { apiClient } from "@/utils/apiClient";
import { BlogPostEntity } from "../entities/blog-post.entity";
import { BlogPostData } from "./getBlogPosts";

export const getBlogPostDetails = async (blogPostId: string) => {
  const { content, created_at, id, title, updated_at }: BlogPostData =
    await apiClient.get(`/blog-post/${blogPostId}`);
  return new BlogPostEntity({ id, content, title, created_at, updated_at });
};
