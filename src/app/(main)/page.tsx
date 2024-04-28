import { BlogPostEntity } from "@/core/entities/blog-post.entity";
import { getBlogPosts } from "@/core/use-cases/getBlogPosts";
import { BlogPostCard } from "./components/BlogPostCard";
import { TextField } from "@/components/TextField";
import { SearchField } from "./components/SearchField";
import { IGetBlogPostsParams } from "@/core/interfaces/IGetBlogPostsParams";

const fetchPosts = () => {};

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string; ordering?: "title" | "created_at" };
}) {
  const blogPosts = await getBlogPosts({
    ...(searchParams?.search && { search: searchParams.search }),
    ...(searchParams?.ordering
      ? { ordering: searchParams.ordering }
      : { ordering: "created_at" }),
  });
  return (
    <div className="flex flex-col">
      <SearchField />
      {blogPosts.map((blogPost) => {
        return <BlogPostCard key={blogPost.id} blogPost={blogPost} />;
      })}
    </div>
  );
}
