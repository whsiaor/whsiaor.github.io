import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="text-3xl sm:text-5xl mb-3 leading-tight font-bold tracking-tight border-left">
        <Link href={`/posts/${slug}`} className="hover:underline underline-offset-4 hover:text-pink-600">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-2xl leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
