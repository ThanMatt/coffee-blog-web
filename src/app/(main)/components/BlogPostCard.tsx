import { BlogPostEntity } from "@/core/entities/blog-post.entity";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";

export const BlogPostCard = ({ blogPost }: { blogPost: BlogPostEntity }) => {
  return (
    <Card
      as={Link}
      href={`blog/${blogPost.id}`}
      className="flex mb-4 hover:bg-gray-100 cursor-pointer"
    >
      <CardHeader className="flex gap-3">
        <h1 className="text-xl font-bold truncate">{blogPost.title}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <h2 className="text-lg">{blogPost.content}</h2>
      </CardBody>
      <Divider />
      <CardFooter className="text-small">
        Date: {blogPost.created_at}
      </CardFooter>
    </Card>
  );
};
