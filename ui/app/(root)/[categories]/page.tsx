"use client";
import PostsWithCategory from "@/components/posts/posts-with-category";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const slugWithCharacter: any = params.categories;
  const slug = decodeURIComponent(slugWithCharacter);

  return (
    <div>
      <PostsWithCategory category={slug} />
    </div>
  );
};

export default Page;
