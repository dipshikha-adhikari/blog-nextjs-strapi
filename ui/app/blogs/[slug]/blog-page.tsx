import { postQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import React from "react";

const BlogPage = async ({ slug }: { slug: string[] | string }) => {
  const { data } = await client.query({
    query: postQuery,
    variables: {
      postSlug: slug,
    },
  });
  console.log(data);
  return (
    <div>
      {/* {imageUrl && (
        <Image
          src={imageUrl}
          alt="image"
          width={200}
          height={200}
          className=" object-contain max-h-60 w-full  "
          layout="responsive"
        />
      )} */}
      {/* <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: xss(md.render(post?.attributes.content)),
          }}
        /> */}
    </div>
  );
};

export default BlogPage;
