import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import { notFound } from "next/navigation";
import postNotFound from "./not-found";
export default function generateMetadata3({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = !posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
  };
}

export default function Posta({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  return (
    <div>
      {posts.map((post) => {
        const { title, id } = post;
        return <h2>{title}</h2>;
      })}
    </div>
  );
}
