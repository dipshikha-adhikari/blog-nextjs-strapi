"use client";
import Content from "@/components/layout/content";
import ErrorPage from "@/components/pages/error-page";
import { postQuery } from "@/graphql/queries";
import { md } from "@/lib/markdown";
import { IPost } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import xss from "xss";
import Author from "./author";
import Comments from "./comments";

const PostComponent = () => {
  const params = useParams();
  const slug = params.slug;
  const [coverImg, setCoverImg] = useState<string | null>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsClient(true);
  }, []);

  const {
    data: {
      posts: {
        data: [postData],
      },
    },
    error,
  }: any = useSuspenseQuery(postQuery, {
    variables: { slug },
  });

  const post: IPost = postData;

  useEffect(() => {
    if (post) {
      const { url } = imageReducer(
        post.attributes.featuredimage.data.attributes.url,
      );
      setCoverImg(url);
    }
  }, [post]);

  if (!isClient) return <Content>Loading...</Content>;

  if (error) return <ErrorPage />;

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
          <Author post={post} />
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
      <Comments postId={post.id} />
    </Content>
  );
};

export default PostComponent;
