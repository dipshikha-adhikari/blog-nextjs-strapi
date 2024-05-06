import { postsQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import { Post } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const TrendingBlogs = async () => {
  const { data } = await client.query({
    query: postsQuery,
  });

  return (
    <div className="grid gap-md  md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
      {data.posts.data.map((r: Post) => {
        const imageSrc =
          r.attributes.author.data.attributes.avatar.data.attributes.formats
            .thumbnail.url;
        const { url } = imageReducer(imageSrc);

        return (
          <div key={r.id} className="grid gap-sm shadow-xl p-sm">
            <Link className="flex gap-xs items-center" href={"/"}>
              {url && (
                <Image
                  src={url}
                  alt="image"
                  width={20}
                  height={20}
                  className="  w-10 rounded-full h-10  "
                />
              )}
              <span className="font-medium">
                {r.attributes.author.data.attributes.username}
              </span>
            </Link>

            <Link
              href={`/blogs/${r.attributes.slug}`}
              key={r.id}
              className="  grid    w-full  gap-xs  "
            >
              <div className="flex gap-xs items-center"></div>
              <p className="font-bold ">{r.attributes.title}</p>
              <p>{r.attributes.description.slice(0, 70)}...</p>
              <p>{moment(r.attributes.publishedAt).format("ll")}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingBlogs;
