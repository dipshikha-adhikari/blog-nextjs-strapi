import { useToast } from "@/components/ui/use-toast";
import {
  createCommentMutation,
  updateCommentMutation,
} from "@/graphql/mutation";
import { commentsQuery, parentCommentsQuery } from "@/graphql/queries";
import { useAuth } from "@/hooks/use-auth";
import { IComment } from "@/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  comment: IComment | null;
  postId: string;
  mutationType?: string;
  setIsTextareaOpen: (props: boolean) => void;
}

const CommentBox = ({
  comment,
  postId,
  mutationType,
  setIsTextareaOpen,
}: Props) => {
  const [input, setInput] = useState("");
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (mutationType === "edit" && comment?.attributes?.content) {
      setInput(comment?.attributes?.content);
    }
  }, [mutationType, comment?.attributes.content]);

  const [createComment, { loading: creating }] = useMutation(
    createCommentMutation,
    {
      refetchQueries: [
        comment?.attributes?.parentComment
          ? commentsQuery
          : parentCommentsQuery,
      ],
      onCompleted: () => {
        setIsTextareaOpen(false);
        toast({
          title: "Success",
        });
      },
      onError: () => {
        toast({
          title: "Error",
          variant: "destructive",
        });
      },
    },
  );

  const [updateComment, { loading: updating }] = useMutation(
    updateCommentMutation,
    {
      refetchQueries: [
        comment?.attributes?.parentComment
          ? commentsQuery
          : parentCommentsQuery,
      ],

      onCompleted: () => {
        setIsTextareaOpen(false);
        toast({
          title: "Success",
        });
      },
      onError: () => {
        toast({
          title: "Error",
          variant: "destructive",
        });
      },
    },
  );

  const handleSubmit = async () => {
    if (!input) return;
    if (!user) router.push("/auth/login");

    const content = input;
    const author = user?.userId;
    const created = new Date();

    const variables = {
      content,
      postId,
      author,
      created,
      publishedAt: created,
    };

    if (mutationType === "edit") {
      //Comment id is available in this case, we do not need to change parentId
      updateComment({
        variables: { ...variables, id: comment?.id },
      });
    }

    if (mutationType === "create") {
      //Set the parentComment to the comment we are replying
      await createComment({
        variables: { ...variables, parentComment: comment?.id },
      });
    }
  };

  return (
    <div className="grid gap-xs p-xs  w-full  rounded-sm border-[1px] border-border">
      <textarea
        name=""
        onChange={(e) => setInput(e.target.value)}
        id=""
        value={input}
        style={{ scrollbarWidth: "none" }}
        className=" outline-none  bg-background  min-h-6 "
      ></textarea>
      <div className="flex gap-xs items-center justify-end">
        <Button
          className="w-fit bg-red-500 text-white "
          onClick={() => setIsTextareaOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="w-fit disabled:opacity-50"
          disabled={creating || updating}
          onClick={handleSubmit}
        >
          {creating || updating ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
