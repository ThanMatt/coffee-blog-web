"use client";
import { Button } from "@/components/Button";
import { deleteBlogPost } from "@/core/use-cases/deleteBlogPost";
import { getBlogPosts } from "@/core/use-cases/getBlogPosts";
import { useRouter } from "next/navigation";

export const DeleteBlogPostButton = ({
  blogPostId,
}: {
  blogPostId: string;
}) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteBlogPost(blogPostId);
    router.push("/");
  };

  // const handleClick = async () => {
  //   console.log("test");
  //   await getBlogPosts();
  //   // router.push("/");
  // };
  return <Button onClick={handleDelete} color="danger" label="Delete" />;
};
