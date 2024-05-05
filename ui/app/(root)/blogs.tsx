import { fetcher } from "@/lib/api";
import { Post } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import Image from "next/image";
import Link from "next/link";

const Blogs = async () => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?populate=*`,
    { cache: "no-cache" },
  );

  if (!response.data)
    return <div className="grid place-items-center">Error loading blogs!</div>;

  return (
    <div className="grid   gap-sm md:grid-cols-2  ">
      {response.data.map((r: Post) => {
        const { url, width } = imageReducer(
          r.attributes.featuredimage?.data?.attributes,
        );
        return (
          <Link
            href={`/blogs/${r.attributes.slug}`}
            key={r.id}
            className=" grid shadow-2xl h-full   w-full  gap-10 p-10"
          >
            <p className="text-3xl ">{r.attributes.title}</p>
            {url && (
              <Image
                src={url}
                alt="image"
                width={width}
                height={200}
                className=" object-cover max-h-60 w-full  max-w-80"
                layout="responsive"
              />
            )}
            <p>{r.attributes.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Blogs;
