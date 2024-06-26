import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="px-2 md:px-20">
      <div>
        <h2 className="text-right border-b-2 w-100 mb-7 text-3xl md:text-5xl font-thin tracking-tighter leading-tight">
          All Posts
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-16 mb-32">
        {posts.map((post) => (
          <div className="border-b " key={post.slug}>
            <PostPreview
              // key={post.slug}
              title={post.title}
              // coverImage={post.coverImage}
              date={post.date}
              // author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
