import { IFeaturedPost } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ post }: { post: IFeaturedPost }) => {
  const imageSrc = post.attributes.featuredimage.data.attributes.url;

  const { url } = imageReducer(imageSrc);

  return (
    <Link
      className="grid gap-sm"
      href={`/${post.attributes.category.data.attributes.name}/${post.attributes.slug}`}
    >
      {url && (
        <Image
          src={url}
          alt="image"
          width={1000}
          height={200}
          className=" object-cover max-h-60 w-full  "
          //   layout="responsive"
        />
      )}
      <div className="grid gap-xs">
        <p className="font-bold ">{post.attributes.title}</p>
        <p>{moment(post.attributes.createdAt).format("ll")}</p>
        <p className="text-primary-dark-foreground">
          #{post.attributes.category.data.attributes.name}
        </p>
      </div>
    </Link>
  );
};

export default Featured;
