import CommentBox from "@/app/(root)/[categories]/[slug]/comment-box";
import { parentCommentsQuery } from "@/graphql/queries";
import { IComment } from "@/types";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { MdOutlineQuickreply } from "react-icons/md";
import Comment from "./comment";

const Comments = ({ postId }: { postId: string }) => {
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);

  const {
    data: {
      comments: { data: comments },
    },
    refetch,
  }: any = useSuspenseQuery(parentCommentsQuery, {
    variables: {
      postId,
    },
    fetchPolicy: "no-cache",
  });
  return (
    <div className="w-full grid gap-sm">
      {/* This comment-box is used for new comment, so the comment is null */}
      {isTextareaOpen && (
        <CommentBox
          postId={postId}
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
        <div className="text-primary font-bold flex items-center gap-xs bg-border  rounded-full w-fit p-xs  cursor-pointer">
          <BiLike /> 5
        </div>
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

export default Comments;
