export default async function getUserPost(userId: string) {
  console.log("userId in getUserPost", userId);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  console.log("res posts", res);
  if (!res.ok) throw new Error("Failed to fetch user");

  return res.json();
}
