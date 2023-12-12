import React from "react";

export default async function getUser(userId: string) {
  // console.log("userId in getUser", userId);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
    // { cache: "no-store" }
  );

  // console.log("res getUser", res);
  if (!res.ok) return undefined;

  return res.json();
}
