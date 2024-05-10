"use client";
import AuthorImage from "@/components/elements/author-image";
import Content from "@/components/layout/content";
import { postQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import { md } from "@/lib/markdown";
import { Post } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import xss from "xss";

const PostComponent = () => {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState<Post>();
  const [coverImg, setCoverImg] = useState<string | null>("");

  useEffect(() => {
    const getPost = async () => {
      const { data } = await client.query({
        query: postQuery,
        variables: {
          slug,
        },
      });
      setPost(data.posts.data[0]);
    };
    getPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      const { url } = imageReducer(
        post.attributes.featuredimage.data.attributes.url,
      );
      setCoverImg(url);
    }
  }, [post]);

  if (!post) return <div></div>;

  return (
    <Content
      style={{
        display: "grid",
        gap: "2rem",
        "--max-width": "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <section className="grid mx-auto gap-md">
        <p className="text-4xl font-semibold">{post.attributes.title}</p>
        <Link href={"/author"} className="flex items-center gap-sm">
          <AuthorImage author={post.attributes.author} />
          <div className="">
            <p className="font-semibold">
              {post.attributes.author.data.attributes.username}
            </p>
            <div className="flex gap-xs items-center">
              <p className="text-sm  text-slate-600 dark:text-slate-400 z-[-1]">
                Published at {moment(post.attributes.publishedAt).format("ll")}
              </p>
              <Link href={""} className="font-bold text-sm">
                # {post.attributes.category.data.attributes.name}
              </Link>
            </div>
          </div>
        </Link>
      </section>
      <section className="grid gap-sm">
        {coverImg && (
          <Image
            src={coverImg}
            alt="image"
            width={1000}
            height={200}
            className=" object-contain max-h-60 w-full  "
            layout="responsive"
          />
        )}

        <div className="font-semibold  text-xl">
          {post.attributes.description}
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: xss(md.render(post?.attributes.content)),
          }}
        />
      </section>
    </Content>
  );
};

export default PostComponent;
