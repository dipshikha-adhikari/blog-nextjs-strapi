"use server";
import { featuredPostsQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import { IFeaturedPosts, IPost } from "@/types";
import { ApolloQueryResult } from "@apollo/client";
import Post from "./post";

const TrendingBlogs = async ({ posts }: { posts: IPost[] }) => {
  const { data: featuredPosts }: ApolloQueryResult<IFeaturedPosts> =
    await client.query({
      query: featuredPostsQuery,
    });

  const featuredPostId =
    featuredPosts.featureds.data[0].attributes.post.data.id;

  if (!posts) return <div className="text-center">Error</div>;

  return (
    <div className="grid gap-xl   ">
      {posts.map((post: IPost) => {
        if (post.id !== featuredPostId) {
          return <Post post={post} key={post.id} />;
        }
      })}
    </div>
  );
};

export default TrendingBlogs;
