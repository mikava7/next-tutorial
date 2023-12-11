import React from "react";
import getUser from "@/app/lib/getUser";
import getUserPost from "@/app/lib/getUserPost";
import { Suspense } from "react";
import Loading from "../../about/loading";
import UserPosts from "./components/UserPosts";
type Params = {
  params: {
    userId: string;
  };
};

async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);

  const userPostsData: Promise<Post[]> = getUserPost(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;
  const userPosts = await userPostsData;

  console.log("user", user);
  console.log("userPosts", userPosts);

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
