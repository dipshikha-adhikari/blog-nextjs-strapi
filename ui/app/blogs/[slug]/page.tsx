"use client";
import { fetcher } from "@/lib/api";
import { md } from "@/lib/markdown";
import { Post } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import xss from "xss";

interface ImageData {
  url: string | null;
  height: number | undefined;
  width: number | undefined;
}

const Page = () => {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState<Post>();
  const [imageData, setImageData] = useState<ImageData>({
    url: null,
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&&populate=*`,
      );

      setPost(response.data[0]);
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      const { url, width, height } = imageReducer(
        post.attributes.featuredimage?.data?.attributes,
      );
      setImageData((prev) => ({ ...prev, url, width, height }));
    }
  }, [post]);

  if (!post) return null;

  return (
    <div className="flex gap-4 items-start">
      <div className="grid gap-5">
        <header>
          {post.attributes.author}
          <p className="text-4xl font-bold"> {post.attributes.title}</p>
        </header>
        <p>{post.attributes.description}</p>

        {imageData.url && (
          <Image
            src={imageData.url}
            alt="image"
            width={200}
            height={200}
            className=" object-contain max-h-60 w-full  "
            layout="responsive"
          />
        )}

        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: xss(md.render(post?.attributes.content)),
          }}
        />
      </div>
      <section>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
      </section>
    </div>
  );
};

export default Page;
