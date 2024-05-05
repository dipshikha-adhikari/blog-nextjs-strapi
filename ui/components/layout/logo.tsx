import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../assets/images (1).jpg";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={50}
          className="rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Logo;
