import CommentBox from "@/components/posts/comment-box";
import { parentCommentsQuery } from "@/graphql/queries";
import { useAuth } from "@/hooks/use-auth";
import { useLikes } from "@/hooks/use-likes";
import { IComment, IPost } from "@/types";
import { UseSuspenseQueryResult } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { MdOutlineQuickreply } from "react-icons/md";
import Comment from "./comment";

interface IComments {
  comments: {
    data: IComment[];
  };
}

const CommentsContainer = ({ post }: { post: IPost }) => {
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const { user } = useAuth();
  const { handlePostLike, isPostLiked } = useLikes(
    user?.userId,
    post.attributes.post_like,
  );

  const {
    data: {
      comments: { data: comments },
    },
    refetch,
  }: UseSuspenseQueryResult<IComments> = useSuspenseQuery(parentCommentsQuery, {
    variables: {
      postId: post?.id,
    },
    fetchPolicy: "no-cache",
  });

  return (
    <div className="w-full grid gap-sm">
      {/* This comment-box is used for new comment, so the comment is null */}
      {isTextareaOpen && (
        <CommentBox
          postId={post.id}
          setIsTextareaOpen={setIsTextareaOpen}
          comment={null}
        />
      )}
      {!isTextareaOpen && (
        <input
          placeholder="Add a comment"
          onClick={() => setIsTextareaOpen(true)}
          className=" p-xs bg-input border-border border-[1px]"
        />
      )}
      <section className="flex items-center gap-xs ">
        <div className="text-primary font-bold flex items-center gap-xs bg-border  rounded-full w-fit p-xs  cursor-pointer">
          <MdOutlineQuickreply className="" />
          {comments.length}
        </div>
        <p
          className="flex items-center bg-border  p-xs  rounded-full gap-1"
          onClick={handlePostLike}
        >
          {" "}
          {isPostLiked ? (
            <BiSolidLike className="text-lg cursor-pointer" />
          ) : (
            <BiLike className="text-lg cursor-pointer" />
          )}
          {post?.attributes?.post_like?.data?.attributes?.users?.data?.length}
        </p>
      </section>
      {/* comments with no parent comment  */}
      {comments?.map((comment: IComment) => {
        return (
          <Comment refetch={refetch} comment={comment} key={comment.id + "y"} />
        );
      })}
    </div>
  );
};

export default CommentsContainer;
