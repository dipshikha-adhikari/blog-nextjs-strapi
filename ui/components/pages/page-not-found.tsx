import Image from "next/image";
import React from "react";
import ErrorImage from "../../assets/404error.png";

const PageNotFound = () => {
  return (
    <Image
      src={ErrorImage}
      alt="image"
      width={100}
      height={100}
      layout="responsive"
    />
  );
};

export default PageNotFound;
