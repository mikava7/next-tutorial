import React from "react";
import getUser from "@/app/lib/getUser";
import getUserPost from "@/app/lib/getUserPost";
import getAllUsers from "@/app/lib/getAllUsers";
import { Suspense } from "react";
import Loading from "../../about/loading";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user) {
    return {
      title: "User not found ",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);

  const userPostsData: Promise<Post[]> = getUserPost(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  if (!user) {
    return notFound();
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export default UserPage;

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
