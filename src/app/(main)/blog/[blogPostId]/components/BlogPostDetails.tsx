"use client";

import { BlogPostEntity } from "@/core/entities/blog-post.entity";
import { DeleteBlogPostButton } from "./DeleteBlogPostButton";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { BlogPostFormData, blogPostSchema } from "../../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "@/components/Forms/FormTextField";
import { updateBlogPost } from "@/core/use-cases/updateBlogPost";
import { useRouter } from "next/navigation";
import { formatDate } from "date-fns";

export const BlogPostDetails = ({
  blogPost,
  blogPostId,
}: {
  blogPost: BlogPostEntity;
  blogPostId: string;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [post, setPost] = useState<BlogPostEntity>(blogPost);

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<BlogPostFormData>({ resolver: zodResolver(blogPostSchema) });

  useEffect(() => {
    setValue("title", blogPost.title);
    setValue("content", blogPost.content);
  }, [blogPost.title, blogPost.content, setValue]);

  const onSubmit = async (values: BlogPostFormData) => {
    const data = await updateBlogPost(blogPostId, values);
    setPost(data);

    setEditMode(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          {editMode ? (
            <>
              <FormTextField
                error={errors.title}
                name="title"
                label="Title"
                control={control}
              />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <h2 className="text-lg">
                {formatDate(new Date(post.created_at), "MMM dd, yyyy")}
              </h2>
            </>
          )}
        </div>
        <div>
          {editMode ? (
            <>
              <Button
                type="submit"
                className="mr-8"
                variant="bordered"
                color="primary"
                label="Update"
                onClick={() => handleSubmit(onSubmit)()}
              />
              <Button
                color="secondary"
                label="Cancel"
                onClick={() => setEditMode(!editMode)}
              />
            </>
          ) : (
            <>
              <Button
                className="mr-8"
                variant="bordered"
                color="primary"
                label="Edit"
                onClick={() => setEditMode(!editMode)}
              />
              <DeleteBlogPostButton blogPostId={blogPostId} />
            </>
          )}
        </div>
      </div>
      <div className="mt-6">
        {editMode ? (
          <FormTextField
            error={errors.content}
            name="content"
            label="Content"
            control={control}
          />
        ) : (
          <p>{post.content}</p>
        )}
      </div>
    </div>
  );
};
