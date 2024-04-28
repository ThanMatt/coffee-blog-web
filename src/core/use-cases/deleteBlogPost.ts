import { apiClient } from "@/utils/apiClient";

export const deleteBlogPost = async (blogPostId: string) => {
  try {
    await apiClient.delete(`/blog-post/${blogPostId}`);
    return true;
  } catch (error) {
    console.error("Delete blog post: ", error);
  }
};
