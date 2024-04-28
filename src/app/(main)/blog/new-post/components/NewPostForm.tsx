"use client";
import { useForm } from "react-hook-form";
import { BlogPostFormData, blogPostSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "@/components/Forms/FormTextField";
import { FormTextarea } from "@/components/Forms/FormTextarea";
import { Button } from "@/components/Button";

export const NewPostForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
  });

  const onSubmit = (values: BlogPostFormData) => {
    console.log(values);
  };
  return (
    <form>
      <div className="mb-4">
        <FormTextField
          control={control}
          label="Title"
          error={errors?.title}
          name="title"
        />
      </div>
      <div className="mb-4">
        <FormTextarea
          control={control}
          label="Content"
          error={errors?.content}
          name="content"
        />
      </div>

      <div className="flex flex-col mb-2">
        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          label="Submit"
          color="primary"
        />
      </div>
    </form>
  );
};
