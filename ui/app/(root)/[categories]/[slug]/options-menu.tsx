import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { deleteCommentMutation } from "@/graphql/mutation";
import { commentsQuery } from "@/graphql/queries";
import { IComment } from "@/types";
import { useMutation } from "@apollo/client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
export default function OptionsMenu({
  setIsTextareaOpen,
  refetch,
  comment,
  authorId,
  setMutationType,
}: {
  refetch: any;
  comment: IComment;
  authorId: string;
  setIsTextareaOpen: (props: boolean) => void;
  setMutationType: (props: string) => void;
}) {
  const [deleteMyComment, { loading }] = useMutation(deleteCommentMutation);
  const { toast } = useToast();

  const deleteComment = async () => {
    try {
      if (comment.attributes.author.data.id !== authorId) {
        throw new Error("You are not allowed to do this ");
      }
      await deleteMyComment({
        variables: {
          id: comment.id,
        },
        refetchQueries: [commentsQuery],
      });
      toast({
        title: "Successfully deleted",
      });
      await refetch();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
    }
  };

  return (
    <>
      <CiEdit
        fontSize={20}
        className="cursor-pointer"
        onClick={() => {
          setIsTextareaOpen(true);
          setMutationType("edit");
        }}
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="p-0 bg-transparent text-foreground">
            <MdDeleteOutline fontSize={20} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm ">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>

          <div className="flex gap-sm justify-center">
            <DialogClose asChild>
              <Button className="bg-destructive px-sm" onClick={deleteComment}>
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                {loading ? "Deleting" : "Yes"}
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="px-sm">No</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
