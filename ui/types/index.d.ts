export interface Post {
  id: string;
  attributes: {
    title: string;
    slug: string;
    publishedAt: Date;
    content: any;
    description: string;
    author: Author;
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

interface Author {
  data: {
    id: number;
    attributes: {
      username: string;
      email: string;
      bio: string;
      createdAt: Date;
      avatar: {
        data: {
          attributes: {
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
