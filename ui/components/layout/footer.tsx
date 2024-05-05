import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="  relative bottom-[-10px]  fill-gray-200 z-[-50] dark:fill-black-light "
      >
        <path
          fill-opacity="1"
          d="M0,320L80,288C160,256,320,192,480,186.7C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <main className="max-w-[1400px]  bg-gray-200  dark:bg-black-light dark:text-white   grid gap-5 p-sm md:px-md xl:px-xl  mx-auto w-full ">
        <section className="flex gap-sm items-center justify-around">
          <Image
            src={
              "https://edublogs.org/files/2021/01/logo-small-e1610736484402.png"
            }
            alt="image"
            width={50}
            height={50}
          />
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </section>
        <section className="grid place-items-center">
          <code className="opacity-50"> 2024 Copyright@ MarkMyWords</code>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
