import AuthorImage from "@/components/elements/author-image";
import { IComment, IPost } from "@/types";
import moment from "moment";

const Author = ({ comment, post }: { comment?: IComment; post?: IPost }) => {
  const time = post?.attributes.createdAt || comment?.attributes?.createdAt;
  return (
    <section className="flex gap-sm">
      {comment?.attributes.author ? (
        <AuthorImage author={comment?.attributes?.author} />
      ) : (
        post && <AuthorImage author={post.attributes.author} />
      )}
      <div>
        <p className="font-semibold">
          {comment?.attributes?.author?.data?.attributes?.username ||
            post?.attributes?.author?.data.attributes.username}
        </p>
        <p className="text-sm  text-slate-600 dark:text-slate-400 z-[-1]">
          {moment.utc(time).startOf("minute").fromNow()}
        </p>
      </div>
    </section>
  );
};

export default Author;
