import * as zod from "zod";

export const blogPostSchema = zod.object({
  title: zod.string().min(1, { message: "Title is required" }),
  content: zod.string().min(1, { message: "Content is required" }),
});

export type BlogPostFormData = zod.infer<typeof blogPostSchema>;
