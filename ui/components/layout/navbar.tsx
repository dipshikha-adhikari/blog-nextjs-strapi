"use client";
import Link from "next/link";
import ThemeButton from "../elements/theme-button";
import Logo from "./logo";
import Menu from "./menubar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[rgba(207,213,213,0.1)] dark:bg-[rgba(28,28,29,0.5)] shadow-sm backdrop-blur-sm p-sm md:px-md xl:px-xl dark:text-white text-black">
      <div className="flex max-w-[1400px] mx-auto justify-between items-center ">
        <Logo />
        <p className="relative">
          Hiring{" "}
          <span className="  rounded-full bg-red-400 text-white p-xs">4</span>
        </p>
        <MobileNavbar />
        <DesktopNavbar />
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  return (
    <div className="md:hidden flex items-center gap-sm">
      <ThemeButton />
      <Menu />
    </div>
  );
};

const DesktopNavbar = ({ user }: any) => {
  return (
    <div className="hidden md:flex items-center gap-md">
      <ThemeButton />
      <ul className="flex gap-sm items-center">
        <Link href={"/blogs"} className="font-semibold">
          Blogs
        </Link>
        {user ? (
          <Link href={"/user"} className="font-semibold">
            Profile
          </Link>
        ) : (
          <Link href={"/auth/login"} className="font-semibold">
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
