import ContentLayout from "@/components/layout/content-layout";
import { IoMdTrendingUp } from "react-icons/io";
import TrendingBlogs from "./trending-blogs";
import Categories from "@/components/layout/categories";

const Page = () => {
  return (
    <div>
      <ContentLayout
        style={{
          "--light-background": "#f1f5f9",
          "--dark-background": "#000000",
        }}
      >
        <section className="grid gap-xl pt-xl pb-[5rem] place-items-start">
          <div>
            <h1 className="text-4xl">Learn how to Fuck</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem?
          </p>
          <button className="bg-primary text-white dark:text-black-default p-xs rounded-sm">
            Start fucking
          </button>
        </section>
      </ContentLayout>

      <ContentLayout>
        <section className="grid gap-md">
          <header className=" flex items-center gap-xs font-bold">
            <IoMdTrendingUp className="border-2 border-primary" />
            Trending on
          </header>
          {<TrendingBlogs />}
        </section>
      </ContentLayout>
      <Categories />
    </div>
  );
};

export default Page;
