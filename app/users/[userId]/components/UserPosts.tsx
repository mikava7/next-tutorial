type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  // console.log("posts in UserPosts", posts);
  const content = posts.map((post) => {
    return (
      <article key={post.id + post.userId}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}
