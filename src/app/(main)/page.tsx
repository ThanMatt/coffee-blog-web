import { getBlogPosts } from "@/core/use-cases/getBlogPosts";
import { BlogPostCard } from "./components/BlogPostCard";
import { SearchField } from "./components/SearchField";
import { Dropdown } from "@/components/Dropdown";

export type SearchParams = {
  search?: string;
  sort?: string;
  order?: "ASC" | "DESC";
};

const fetchPosts = async (params: SearchParams) => {
  const search = params?.search;
  const sort = params?.sort ?? "created_at";
  const order = params?.order ?? "DESC";

  const ordering = order === "DESC" ? `-${sort}` : `+${sort}`;
  const response = await getBlogPosts({
    ...(search && { search }),
    ordering,
  });

  return response;
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const blogPosts = await fetchPosts(searchParams);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <SearchField term={searchParams?.search} />
        </div>
        <Dropdown
          items={[
            { key: "created_at", label: "Created At" },
            { key: "title", label: "Title" },
          ]}
          currentValue={{ key: "created_at", label: "Created At" }}
        />
      </div>
      {blogPosts.map((blogPost) => {
        return <BlogPostCard key={blogPost.id} blogPost={blogPost} />;
      })}
    </div>
  );
}
