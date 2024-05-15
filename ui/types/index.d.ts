export interface IPost {
  id: string;
  attributes: {
    title: string;
    slug: string;
    createdAt: Date;
    content: any;
    description: string;
    author: IAuthor;
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
    category: Category;
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

interface Category {
  data: {
    id: 1;
    attributes: {
      name: string;
      parentCategory: Category;
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
  };
}

export interface ICreateComment {
  createComment: {
    data: IComment;
  };
}
