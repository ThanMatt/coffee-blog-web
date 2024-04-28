export class BlogPostEntity {
  public id: number;
  public title: string;
  public content: string;
  public created_at: string;
  public updated_at: string;

  constructor({ id, title, content, created_at, updated_at }: BlogPostEntity) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
