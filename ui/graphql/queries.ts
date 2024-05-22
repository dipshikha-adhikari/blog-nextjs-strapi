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
          post_like {
            data {
              attributes {
                users {
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

export const featuredPostsQuery = gql`
  query featured {
    featureds {
      data {
        attributes {
          post {
            data {
              id
              attributes {
                description
                title
                content
                slug
                createdAt
                featuredimage {
                  data {
                    attributes {
                      url
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
      }
    }
  }
`;

export const childCategoriesQuery = gql`
  query childCategories($id: ID!) {
    categories(filters: { parentCategory: { id: { eq: $id } } }) {
      data {
        id
        attributes {
          name
          parentCategory {
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

export const parentCategoriesQuery = gql`
  query parentCategories {
    categories(filters: { parentCategory: { id: { eq: null } } }) {
      data {
        id
        attributes {
          name
          parentCategory {
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
          post {
            data {
              id
              attributes {
                title
              }
            }
          }
          comment_like {
            data {
              attributes {
                users {
                  data {
                    attributes {
                      username
                    }
                  }
                }
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
          comment_like {
            data {
              attributes {
                users {
                  data {
                    attributes {
                      username
                    }
                  }
                }
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

export const postLikesQuery = gql`
  query postLikes($id: ID!) {
    likes(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          users {
            data {
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
export const commentLikesQuery = gql`
  query commentlikes($id: ID!) {
    commentLikes(filters: { comment: { id: { eq: $id } } }) {
      data {
        id
        attributes {
          users {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const userQuery = gql`
  query user($id: ID!) {
    usersPermissionsUsers(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          createdAt
          username
          email
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
`;
export const getFollowersQuery = gql`
  query GetFollowers($userId: ID!) {
    followers(filters: { followed_user: { id: { eq: $userId } } }) {
      data {
        attributes {
          follower_user {
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

export const getFollowedUserEntryQuery = gql`
  query GetFollowedUserEntry($followedUserId: ID!) {
    usersPermissionsUsers(
      filters: { followers: { followed_user: { id: { eq: $followedUserId } } } }
    ) {
      data {
        id
      }
    }
  }
`;
