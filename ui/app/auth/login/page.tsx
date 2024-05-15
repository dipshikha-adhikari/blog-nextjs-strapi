"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";
import { LoginForm } from "@/components/auth/login";
import Content from "@/components/layout/content";
import Link from "next/link";

const Page = () => {
  const user = Cookies.get("username");
  const router = useRouter();
  if (user) {
    router.push("/");
  }
  return (
    <Content
      style={{
        "--max-width": "500px",
        boxShadow: "var(--shadow-sm)",
        margin: "1rem auto",
      }}
    >
      <header className="pb-sm text-center">Login to continue</header>
      <LoginForm />
      <div className="py-sm flex gap-sm items-center">
        <p>Don't have an account?</p>
        <Link href={"/auth/register"} className="text-secondary">
          Register
        </Link>
      </div>
    </Content>
  );
};

export default Page;
