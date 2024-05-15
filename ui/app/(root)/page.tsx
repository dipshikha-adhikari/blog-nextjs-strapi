import Content from "@/components/layout/content";
import { IoMdTrendingUp } from "react-icons/io";
import TrendingBlogs from "./trending-blogs";
import Categories from "@/components/layout/categories";
import Image from "next/image";
import maze from "../../assets/maze.jpg";

const Page = () => {
  return (
    <>
      <Content style={{}}>
        <section className="md:flex items-center gap-sm">
          <aside className="grid gap-xl pt-xl pb-[5rem] place-items-start ">
            <div>
              <h1 className="text-4xl">Learn how to Fuck</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              rem?
            </p>
            <button className="bg-primary text-primary-foreground  p-xs rounded-sm">
              Start fucking
            </button>
          </aside>
          <aside className=" w-full flex-1 md:grid md:place-items-end">
            <Image
              src={maze}
              width={200}
              height={300}
              alt="maze"
              layout="responsive"
              className="min-h-[300px] object-cover md:w-full max-w-md"
            />
          </aside>
        </section>
      </Content>

      <Content>
        <section className="grid gap-md">
          <header className=" flex items-center gap-xs font-bold">
            <IoMdTrendingUp className="border-2 border-primary" />
            Trending on
          </header>
          {<TrendingBlogs />}
        </section>
      </Content>
      <Categories />
    </>
  );
};

export default Page;
