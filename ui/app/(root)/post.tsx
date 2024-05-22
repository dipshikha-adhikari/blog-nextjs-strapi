import AuthorImage from "@/components/elements/author-image";
import { IPost } from "@/types";
import { imageReducer } from "@/utils/image-reducer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface Post {
  post: IPost;
}

const Post = async ({ post }: Post) => {
  const coverImageSrc = post.attributes.featuredimage.data.attributes.url;
  const { url: coverImageUrl } = imageReducer(coverImageSrc);

  return (
    <section className="h-fit flex gap-sm items-center border-b-border border-b-[1px] pb-sm">
      <div className=" h-full grid gap-sm w-full flex-2   ">
        <Link href={""} className="w-fit">
          <section className="flex gap-sm items-center">
            <AuthorImage author={post.attributes.author} />
            <div>
              <p className="font-semibold">
                {post?.attributes?.author?.data?.attributes?.username ||
                  "Unknown user"}
              </p>
              <p className="text-sm  text-slate-600 dark:text-slate-400 z-[-1]">
                {moment
                  .utc(post.attributes.createdAt)
                  .startOf("minute")
                  .fromNow()}
              </p>
            </div>
          </section>
        </Link>

        <Link
          href={`/${post.attributes.category.data.attributes.name}/${post.attributes.slug}`}
          key={post.id}
          className="grid  w-fit  gap-xs  "
        >
          <p className="font-semibold">
            {post.attributes.title.slice(0, 100)}
            {post.attributes.title.length > 100 ? "..." : ""}
          </p>

          <p className=" font-normal hidden sm:block">
            {post?.attributes?.description?.slice(0, 100)}
            {post?.attributes?.description?.length > 100 ? "..." : ""}
          </p>
        </Link>
        <Link
          href={`/${post.attributes.category.data.attributes.name}`}
          className="text-primary-dark-foreground"
        >
          # {post.attributes.category.data.attributes.name}
        </Link>
      </div>
      <Link
        href={`/${post.attributes.category.data.attributes.name}/${post.attributes.slug}`}
        key={post.id}
        className="grid  w-fit  gap-xs  "
      >
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt="image"
            width={200}
            height={200}
            className="grid flex-1 md:min-w-40 place-items-start object-contain max-h-60   "
            // layout="responsive"
          />
        )}
      </Link>
    </section>
  );
};

export default Post;
