"use client";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import React from "react";
import { md } from "@/lib/markdown";

const Navbar = () => {
  const { user, isLoading } = useAuth();
  console.log(user);
  return (
    <div className="flex justify-between items-center p-10 bg-green-600 text-white">
      <Link href={"/"}>BMDB</Link>
      <ul className="flex gap-10 items-center">
        <Link href={"/films"}>Films</Link>
        {user ? (
          <Link href={"/user"}>Profile</Link>
        ) : (
          <Link href={"/auth/login"}>Login</Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
