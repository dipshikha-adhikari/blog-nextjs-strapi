"use client";
import Content from "@/components/layout/content";
import { Button } from "@/components/ui/button";
import { featuredPostsQuery } from "@/graphql/queries";
import { IFeaturedPosts } from "@/types";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import Featured from "./featured";

const Hero = () => {
  const { data, error }: UseSuspenseQueryResult<IFeaturedPosts> =
    useSuspenseQuery(featuredPostsQuery);

  if (!data && !error)
    return (
      <Content>
        <div>Loading...</div>
      </Content>
    );

  const featuredPost = data.featureds.data[0].attributes.post.data;

  function getStarted() {
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      const elDistanceToTop = exploreSection?.getBoundingClientRect().top - 40;
      window.scrollTo(0, elDistanceToTop);
    }
  }

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

          <Button className="w-fit" onClick={getStarted}>
            Get Started
          </Button>
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
