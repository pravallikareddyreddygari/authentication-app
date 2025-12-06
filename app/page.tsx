"use client";

import HomeComponent from "./component/HomeComponent";
import { getUserLoggedInStatus } from "./data/users";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  if (!getUserLoggedInStatus()) {
    router.push("/login");
    return null;
  }

  return <HomeComponent />;
}
