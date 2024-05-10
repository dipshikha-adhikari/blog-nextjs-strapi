import { gql } from "@apollo/client";

export const postsQuery = gql`
  query posts {
    posts {
      data {
        id
        attributes {
          description
          title
          slug
          content
          createdAt
          featuredimage {
            data {
              id
              attributes {
                caption
                url
              }
            }
          }
          author {
            data {
              id
              attributes {
                username
                email
                bio
                avatar {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const postQuery = gql`
  query getPost($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          description
          title
          slug
          content
          createdAt
          featuredimage {
            data {
              id
              attributes {
                caption
                url
              }
            }
          }
          author {
            data {
              id
              attributes {
                username
                email
                bio
                avatar {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const categoriesQuery = gql`
  query categories {
    categories {
      data {
        id
        attributes {
          name
          parentCategory {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategory($categoryId: ID) {
    category(id: $categoryId) {
      data {
        id
        attributes {
          name
          parentCategory {
            data {
              attributes {
                name
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }

        # Include any other fields you need
      }
    }
  }
`;

export const getComments = gql`
  query getComments($postId: ID!) {
    comments(filters: { post: { id: { eq: $postId } } }) {
      data {
        id
        attributes {
          content
          createdAt
          author {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;

export const getParentComments = gql`
  query getComments($parentId: ID!) {
    comments(filters: { parentComment: { id: { eq: $parentId } } }) {
      data {
        id
        attributes {
          parentComment {
            data {
              id
              attributes {
                content
              }
            }
          }
          content
          createdAt
          author {
            data {
              id
              attributes {
                username
                avatar {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
