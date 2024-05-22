import CommentBox from "@/components/posts/comment-box";
import { commentsQuery } from "@/graphql/queries";
import { useAuth } from "@/hooks/use-auth";
import { useLikes } from "@/hooks/use-likes";
import { IComment } from "@/types";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { LiaCommentAlt } from "react-icons/lia";
import Author from "./author";
import OptionsMenu from "./options-menu";

const Comment = ({ comment, refetch }: { comment: IComment; refetch: any }) => {
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [mutationType, setMutationType] = useState("");
  const { user } = useAuth();
  const { isCommentLiked, handleCommentLike } = useLikes(
    user?.userId,
    comment.attributes.comment_like,
  );
  // Fetch comments with parent Id, means fetch replies of each comment until parentId is empty
  const { data }: any = useSuspenseQuery(commentsQuery, {
    variables: {
      postId: comment.attributes.post.data.id,
      parentId: comment?.id || "",
    },
  });

  const replies = data.comments.data;

  return (
    <main className="grid border-border border-l-2 gap-2 pl-md pt-md">
      <Author comment={comment} />
      <p className="pl-md  break-all">{comment?.attributes?.content}</p>
      <div className="pl-md  flex gap-sm items-center">
        <LiaCommentAlt
          className="text-primary text-xl  cursor-pointer"
          onClick={() => {
            setIsTextareaOpen(true);
            setMutationType("create");
          }}
        />
        <p className="flex items-center gap-1" onClick={handleCommentLike}>
          {" "}
          {isCommentLiked ? (
            <BiSolidLike className="text-lg cursor-pointer" />
          ) : (
            <BiLike className="text-lg cursor-pointer" />
          )}
          {
            comment?.attributes?.comment_like?.data?.attributes?.users?.data
              ?.length
          }
        </p>
        {user?.userId &&
          comment?.attributes?.author?.data?.id === user?.userId && (
            <OptionsMenu
              refetch={refetch}
              setMutationType={setMutationType}
              comment={comment}
              authorId={comment.attributes.author.data.id}
              setIsTextareaOpen={setIsTextareaOpen}
            />
          )}
      </div>
      {isTextareaOpen && (
        <CommentBox
          postId={comment.attributes.post.data.id}
          comment={comment}
          mutationType={mutationType}
          setIsTextareaOpen={setIsTextareaOpen}
        />
      )}
      <div className="">
        {replies.map((reply: IComment, ind: string) => {
          return (
            <div key={reply.id + "x" + ind}>
              <Comment refetch={refetch} comment={reply} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Comment;
