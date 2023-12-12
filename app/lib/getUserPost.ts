export default async function getUserPost(userId: string) {
  // console.log("userId in getUserPost", userId);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );
  // console.log("res posts", res);
  if (!res.ok) return undefined;

  return res.json();
}
