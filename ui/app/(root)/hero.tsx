import Content from "@/components/layout/content";
import { featuredPostsQuery } from "@/graphql/queries";
import { client } from "@/lib/apollo-client";
import { IFeaturedPosts } from "@/types";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";
import Featured from "./featured";

const Hero = async () => {
  const { data, loading }: ApolloQueryResult<IFeaturedPosts> =
    await client.query({
      query: featuredPostsQuery,
    });

  if (loading)
    return (
      <Content>
        <div>Loading...</div>
      </Content>
    );

  const featuredPost = data.featureds.data[0].attributes.post.data;

  return (
    <Content style={{ paddingTop: "2rem" }}>
      <main className="grid  gap-2xl lg:flex ">
        <section className="grid  md:place-content-center lg:place-content-start gap-md flex-1 ">
          <div className="text-2xl sm:text-4xl grid gap-sm sm:gap-md  ">
            <p className="font-bold md:text-5xl">Start Exploring</p>
            <p className="font-bold md:text-5xl text-secondary">
              Get Knowledge{" "}
            </p>
            <p className="font-bold md:text-5xl">Stay knowledeable</p>
          </div>

          <Link
            href={"/explore"}
            className="bg-foreground w-fit p-xs rounded-md text-background"
          >
            Get Started
          </Link>
        </section>
        <section className="grid flex-1 gap-sm">
          <h1 className="uppercase text-xl font-bold">Featured</h1>
          <Featured post={featuredPost} />
        </section>
      </main>
    </Content>
  );
};

export default Hero;
