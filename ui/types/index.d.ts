export interface IPost {
  id: string;
  attributes: {
    title: string;
    slug: string;
    createdAt: Date;
    content: any;
    description: string;
    author: IAuthor;
    post_like: {
      data: {
        attributes: {
          users: {
            data: {
              id: string;
              attributes: {
                username;
              };
            }[];
          };
        };
      };
    };
    featuredimage: {
      data: {
        attributes: {
          url: string;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
    category: {
      data: ICategory;
    };
  };
}

interface IFeaturedPosts {
  featureds: {
    id;
    data: {
      id: string;
      attributes: {
        post: {
          data: IFeaturedPost;
        };
      };
    }[];
  };
}

interface IFeaturedPost {
  id: string;
  attributes: {
    description: string;
    title: string;
    slug: string;
    content: string;
    createdAt: Date;
    featuredimage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: ICategory;
    };
  };
}

interface ICategories {
  categories: {
    data: ICategory[];
  };
}

interface ICategory {
  id: string;
  attributes: {
    name: string;
    parentCategory: {
      data: ICategory;
    };
  };
}

interface IAuthor {
  data: {
    id: string;
    attributes: {
      username: string;
      email: string;
      bio: string;
      createdAt: Date;
      avatar: {
        data: {
          attributes: {
            url: string;
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IComment {
  id: string;
  attributes: {
    content: string;
    createdAt: Date;
    author: IAuthor;
    parentComment: {
      data: {
        id: string;
      };
    };
    post: {
      data: {
        id: string;
      };
    };
    comment_like: {
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
    };
  };
}

export interface ICreateComment {
  createComment: {
    data: IComment;
  };
}

export interface ILikes {
  id: string;
  attributes: {
    post?: {
      data: {
        id: string;
      };
    };
    comment?: {
      data: {
        id: string;
      };
    };
    user: {
      data: {
        id: string;
      };
    };
  };
}
