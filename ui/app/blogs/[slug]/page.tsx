"use client";
import { postQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const PostComponent = () => {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const getPost = async () => {
      const { data } = await client.query({
        query: postQuery,
        variables: {
          slug,
        },
      });
      console.log(data);
    };
    getPost();
  }, [slug]);

  return <p>On progress</p>;
};

export default PostComponent;
