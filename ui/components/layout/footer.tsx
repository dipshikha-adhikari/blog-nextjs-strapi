import Link from "next/link";
import Content from "./content";
import Logo from "./logo";

const Footer = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="  relative bottom-[-10px]  fill-primary-dark z-[-50]  "
      >
        <path d="M0,320L80,288C160,256,320,192,480,186.7C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

      <footer className=" bg-primary-dark ">
        <Content>
          <section className="flex  gap-sm items-center justify-around">
            <Logo />
            <ul className="grid gap-sm">
              <Link href={"/explore"}>Explore</Link>
              <Link href={"/profile"}>Profile</Link>
            </ul>
          </section>
          <section className="grid pt-md place-items-center">
            <p className="opacity-50 text-center">
              {" "}
              2024 Copyright @ Davenport
            </p>
          </section>
        </Content>
      </footer>
    </>
  );
};

export default Footer;
