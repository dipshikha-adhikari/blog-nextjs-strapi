"use client";
import AuthorImage from "@/components/elements/author-image";
import { IPost } from "@/types";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { IoMdTrendingUp } from "react-icons/io";

const MostLikedPosts = ({ posts }: { posts: IPost[] }) => {
  const mostLiked = [
    ...posts.sort((a: IPost, b: IPost) => {
      return (
        a.attributes.post_like?.data.attributes.users.data.length -
        b.attributes.post_like?.data.attributes.users.data.length
      );
    }),
  ];

  return (
    <div className="grid gap-md">
      <header className=" flex items-center text-xl gap-xs font-bold">
        <IoMdTrendingUp className="border-2 border-secondary text-secondary" />
        Most Liked
      </header>
      <div className=" grid gap-xl  ">
        {mostLiked.slice(0, 5).map((post) => {
          return (
            <section
              key={post.id + "x"}
              className="h-full flex gap-2 border-b-border border-b-[1px] pb-sm"
            >
              <div
                key={post.id}
                className=" h-full grid gap-sm w-full flex-2   "
              >
                <Link href={""} className="w-fit">
                  <section className="flex items-center gap-sm">
                    <AuthorImage author={post.attributes.author} />
                    <div>
                      <p className="font-semibold">
                        {post?.attributes?.author?.data?.attributes?.username ||
                          "Unknown user"}
                      </p>
                      <p className="text-sm  text-slate-600 dark:text-slate-400 z-[-1]">
                        {moment
                          .utc(post.attributes.createdAt)
                          .startOf("minute")
                          .fromNow()}
                      </p>
                    </div>
                  </section>
                </Link>

                <Link
                  href={`/${post.attributes.category.data.attributes.name}/${post.attributes.slug}`}
                  key={post.id}
                  className="grid  w-fit  gap-xs  "
                >
                  <p className="font-semibold">
                    {post.attributes.title.slice(0, 100)}
                    {post.attributes.title.length > 100 ? "..." : ""}
                  </p>

                  <p className=" font-normal text-primary-dark-foreground hidden sm:block">
                    {post?.attributes?.description?.slice(0, 100)}
                    {post?.attributes?.description?.length > 100 ? "..." : ""}
                  </p>
                </Link>
                <Link
                  href={`/${post.attributes.category.data.attributes.name}`}
                  className="text-primary-dark-foreground"
                >
                  # {post.attributes.category.data.attributes.name}
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MostLikedPosts;
