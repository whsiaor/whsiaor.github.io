import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  date: string;
};

export function PostHeader({ title, date }: Props) {
  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <PostTitle>{title}</PostTitle>
        <div className="mb-4 text-3xl border-b pb-2 text-right">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
