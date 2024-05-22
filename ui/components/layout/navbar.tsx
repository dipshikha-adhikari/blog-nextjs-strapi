"use client";
import { parentCategoriesQuery } from "@/graphql/queries";
import { ICategories } from "@/types";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeButton from "../elements/theme-button";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CategoriesDesktop from "./categories/desktop";
import Content from "./content";
import Logo from "./logo";
import Sidebar from "./sidebar";
import { useComponentsStore } from "@/store/components";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useComponentsStore();
  const { data }: UseSuspenseQueryResult<ICategories> = useSuspenseQuery(
    parentCategoriesQuery,
  );

  const user = null;
  const categories = data?.categories?.data;

  return (
    <nav className="sticky top-0 bg-[rgba(207,213,213,0.1)] dark:bg-[rgba(28,28,29,0.5)] shadow-sm backdrop-blur-sm dark:text-white text-black">
      <Content>
        <div className="flex relative h-[10vh] max-w-[1400px] mx-auto justify-between items-center ">
          <Logo />
          <div className=" w-full hidden md:flex max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search" />
            <Button type="submit">Search</Button>
          </div>
          <div className="flex items-center gap-sm">
            <ThemeButton />
            <Link
              href={"/explore"}
              className="font-semibold h-[10vh] hidden md:flex items-center explore"
            >
              Explore
            </Link>
            <CategoriesDesktop categories={categories} />
            {user ? (
              <Link href={"/user"} className="font-semibold">
                Profile
              </Link>
            ) : (
              <Link href={"/auth/login"} className="font-semibold">
                Login
              </Link>
            )}

            <RxHamburgerMenu
              fontSize={30}
              className="cursor-pointer md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>
          {isSidebarOpen && <Sidebar />}
        </div>
      </Content>
    </nav>
  );
};

export default Navbar;
