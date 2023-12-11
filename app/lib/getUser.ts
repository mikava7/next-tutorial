import React from "react";

export default async function getUser(userId: string) {
  console.log("userId in getUser", userId);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  console.log("res getUser", res);
  if (!res.ok) throw new Error("Failed to fetch user");

  return res.json();
}
