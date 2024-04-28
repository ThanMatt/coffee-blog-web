import { Button } from "@/components/Button";
import { getBlogPostDetails } from "@/core/use-cases/getBlogPostDetails";
import { BlogPostDetails } from "./components/BlogPostDetails";

export default async function BlogDetailsPage({
  params,
}: {
  params: { blogPostId: string };
}) {
  const blogPost = await getBlogPostDetails(params.blogPostId);

  return (
    <div>
      <BlogPostDetails
        blogPost={JSON.parse(JSON.stringify(blogPost))}
        blogPostId={params.blogPostId}
      />
    </div>
  );
}
