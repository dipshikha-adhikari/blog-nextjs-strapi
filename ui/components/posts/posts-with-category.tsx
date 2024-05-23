import MostLikedPosts from "@/app/(root)/most-liked-posts";
import { postsWithCategoryQuery } from "@/graphql/queries";
import { IPost } from "@/types";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import Content from "../layout/content";
import Post from "./post";

interface Posts {
  posts: {
    data: IPost[];
  };
}

const PostsWithCategory = ({ category }: { category: string }) => {
  const { data }: UseSuspenseQueryResult<Posts> = useSuspenseQuery(
    postsWithCategoryQuery,
    {
      variables: {
        category,
      },
    },
  );

  const posts = data.posts.data;

  if (!posts.length) return <div className="text-center">No items found!</div>;

  return (
    <Content style={{ display: "grid", gap: "2rem" }}>
      <header className="text-secondary font-bold text-xl">{category}</header>
      <main className="grid gap-md lg:flex justify-between">
        <section className="flex-[2] w-full ">
          {posts.map((post: IPost) => {
            return <Post post={post} key={post.id} />;
          })}
        </section>
        <section className="flex-1 w-full bg-primary-dark grid  p-sm gap-md">
          <MostLikedPosts posts={posts} />
        </section>
      </main>
    </Content>
  );
};

export default PostsWithCategory;
