import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import BlogListItem from "./BlogListItem";
export default async function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl dark:text-white/90">
      <h2 className="text-4xl font-bold ">Blog</h2>
      <ul className="w-full ">
        {posts.map((post) => {
          return <BlogListItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
