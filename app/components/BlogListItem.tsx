import React from "react";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
  post: BlogPost;
};

export default function BlogListItem({ post }: Props) {
  const { id, title, date } = post;
  const formatedDate = getFormattedDate(date);
  const content = (
    <li key={post.id}>
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {" "}
        {title}
      </Link>
      <br />

      <p className="text sm mt-1">Crated at {formatedDate}</p>
    </li>
  );
  return content;
}
