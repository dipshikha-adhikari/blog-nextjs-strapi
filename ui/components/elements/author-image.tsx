import { IAuthor } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import Image from "next/image";

const AuthorImage = ({ author }: { author: IAuthor }) => {
  const imageSrc = author?.data?.attributes?.avatar?.data?.attributes?.url;
  const { url: authorImg } = imageReducer(imageSrc);

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
    <div className="w-[40px] bg-red-400 h-[40px] rounded-full text-white grid place-items-center dark:text-slate-900 dark:bg-white ">
      <span className="text-3xl uppercase "> {username?.slice(0, 1)}</span>
    </div>
  );
};
