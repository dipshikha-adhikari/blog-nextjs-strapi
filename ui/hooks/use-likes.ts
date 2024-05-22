import { useEffect, useState } from "react";

interface Likes {
  data: {
    attributes: {
      users: {
        data: {
          id: string;
          attributes: {
            username: string;
          };
        }[];
      };
    };
  };
}

export const useLikes = (
  userId: string | null | undefined,
  commentLikes?: Likes,
  postLikes?: Likes,
) => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isCommentLiked, setIsCommentLiked] = useState(false);

  useEffect(() => {
    if (postLikes?.data) {
      postLikes.data.attributes.users.data.map((item) => {
        if (item.id === userId) {
          setIsPostLiked(true);
        }
      });
    }
    if (postLikes?.data) {
      postLikes.data.attributes.users.data.map((item) => {
        if (item.id === userId) {
          setIsCommentLiked(true);
        }
      });
    }
  }, [userId, postLikes, commentLikes]);

  function handleCommentLike() {
    if (isCommentLiked) {
      setIsCommentLiked(false);
    } else {
      setIsCommentLiked(true);
    }
  }

  function handlePostLike() {
    if (isPostLiked) {
      setIsPostLiked(false);
    } else {
      setIsPostLiked(true);
    }
  }

  return { isCommentLiked, isPostLiked, handleCommentLike, handlePostLike };
};
