import Content from "@/components/layout/content";
import { IoMdTrendingUp } from "react-icons/io";
import Hero from "./hero";
import TrendingBlogs from "./trending-posts";
import MostLikedPosts from "./most-liked-posts";
import { postsQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import { IPost } from "@/types";
import { ApolloQueryResult } from "@apollo/client";

interface Posts {
  posts: {
    data: IPost[];
  };
}

const Page = async () => {
  const { data }: ApolloQueryResult<Posts> = await client.query({
    query: postsQuery,
  });

  const posts = data.posts.data;

  return (
    <div className="">
      <Hero />
      <section
        id="explore-section"
        className="grid scroll-smooth gap-md lg:flex "
      >
        <Content style={{ paddingTop: "4rem", flex: "2" }}>
          <section className="grid  h-fit gap-xl">
            <header className=" flex items-center text-xl gap-xs font-bold">
              <IoMdTrendingUp className="border-2 border-secondary text-secondary" />
              Trending On
            </header>
            {<TrendingBlogs posts={posts} />}
          </section>
        </Content>
        <Content
          style={{
            background: "var(--dark-primary)",
            marginTop: "2rem",
            flex: "1",
          }}
        >
          <MostLikedPosts posts={posts} />
        </Content>
      </section>
    </div>
  );
};

export default Page;
