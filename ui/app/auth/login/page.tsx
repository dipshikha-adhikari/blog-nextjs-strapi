"use client";
import Login from "@/components/auth/login";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";

const Page = () => {
  const user = Cookies.get("username");
  const router = useRouter();
  if (user) {
    router.push("/");
  }
  return <Login />;
};

export default Page;
