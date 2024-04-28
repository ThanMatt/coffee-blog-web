import { apiClient } from "@/utils/apiClient";
import { BlogPostEntity } from "../entities/blog-post.entity";
import { BlogPostData } from "./getBlogPosts";
import { BlogPostFormData } from "@/app/(main)/blog/[blogPostId]/schema";

export const updateBlogPost = async (id: string, body: BlogPostFormData) => {
  const response: BlogPostData = await apiClient.put(`/blog-post/${id}`, body);

  console.log("Blog post updated");
  return new BlogPostEntity({
    id: response.id,
    title: response.title,
    created_at: response.created_at,
    updated_at: response.updated_at,
    content: response.content,
  });
};
