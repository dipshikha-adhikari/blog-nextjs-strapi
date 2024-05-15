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
                      url
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
      }
    }
  }
`;

export const commentsQuery = gql`
  query getComments($postId: ID!, $parentId: ID!) {
    comments(
      sort: "createdAt:desc"
      filters: {
        post: { id: { eq: $postId } }
        parentComment: { id: { eq: $parentId } }
      }
    ) {
      data {
        id
        attributes {
          content
          createdAt
          post {
            data {
              id
            }
          }
          parentComment {
            data {
              id
              attributes {
                content
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
                      url
                      formats
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

export const parentCommentsQuery = gql`
  query getComments($postId: ID!) {
    comments(
      sort: "createdAt:desc"
      filters: {
        and: [
          { post: { id: { eq: $postId } } }
          { parentComment: { id: { eq: null } } }
        ]
      }
    ) {
      data {
        id
        attributes {
          parentComment {
            data {
              id
            }
          }
          post {
            data {
              id
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
