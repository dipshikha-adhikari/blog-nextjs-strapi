"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";
import Content from "@/components/layout/content";
import Link from "next/link";
import { RegistrationForm } from "@/components/auth/register";

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
        border: "1px solid var(--border)",
        margin: "1rem auto",
      }}
    >
      <header className="pb-sm text-center uppercase">Register</header>
      <RegistrationForm />
      <div className="py-sm flex gap-sm items-center">
        <p>Already have an account?</p>
        <Link href={"/auth/login"} className="text-secondary">
          Login
        </Link>
      </div>
    </Content>
  );
};

export default Page;
