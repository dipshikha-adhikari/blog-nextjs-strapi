import { gql } from "@apollo/client";

export const createCommentMutation = gql`
  mutation CreateComment(
    $content: String!
    $postId: ID!
    $author: ID!
    $parentComment: ID
    $created: DateTime!
    $publishedAt: DateTime
  ) {
    createComment(
      data: {
        content: $content
        post: $postId
        author: $author
        parentComment: $parentComment
        created: $created
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
        attributes {
          content
          post {
            data {
              attributes {
                content
              }
            }
          }
          author {
            data {
              id
            }
          }
          parentComment {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const updateCommentMutation = gql`
  mutation UpdateComment(
    $id: ID!
    $content: String!
    $postId: ID!
    $author: ID!
    $publishedAt: DateTime
  ) {
    updateComment(
      id: $id
      data: {
        content: $content
        post: $postId
        author: $author
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
        attributes {
          content
          post {
            data {
              attributes {
                content
              }
            }
          }
          author {
            data {
              id
            }
          }
          parentComment {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const deleteCommentMutation = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id) {
      data {
        id
      }
    }
  }
`;
