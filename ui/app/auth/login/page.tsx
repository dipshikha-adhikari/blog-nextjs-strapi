"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";
import { LoginForm } from "@/components/auth/login";
import Link from "next/link";

const Page = () => {
  const user = Cookies.get("username");
  const router = useRouter();
  if (user) {
    router.push("/");
  }
  return (
    <div>
      <header className="pb-sm text-center">Login to continue</header>
      <LoginForm />
      <div className="py-sm flex gap-sm items-center">
        <p>Don't have an account?</p>
        <Link href={"/auth/register"} className="text-secondary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Page;
