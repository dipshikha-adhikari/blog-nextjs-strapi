import { IAuthor } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AuthorImage = ({ author }: { author: IAuthor }) => {
  const [authorImg, setAuthorImg] = useState<string | null>("");

  useEffect(() => {
    if (author?.data?.attributes?.avatar?.data?.attributes?.url) {
      const imageSrc = author.data.attributes.avatar.data.attributes.url;
      const { url } = imageReducer(imageSrc);
      setAuthorImg(url);
    }
  }, [author]);

  return (
    <div>
      {authorImg ? (
        <Image
          src={authorImg}
          width={30}
          height={30}
          alt="author"
          className="w-[40px] h-[40px] rounded-full"
        />
      ) : (
        <DummyImage username={author?.data?.attributes?.username} />
      )}
    </div>
  );
};

export default AuthorImage;

const DummyImage = ({ username }: { username: string }) => {
  return (
    <div className="w-[40px] bg-slate-900 h-[40px] rounded-full text-white grid place-items-center dark:text-slate-900 dark:bg-white ">
      <span className="text-3xl uppercase "> {username?.slice(0, 1)}</span>
    </div>
  );
};
