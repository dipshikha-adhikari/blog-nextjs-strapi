export interface Post {
  id: string;
  attributes: {
    title: string;
    slug: string;
    publishedAt: Date;
    content: any;
    description: string;
    author: {
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
    };
    featuredimage: {
      data: {
        attributes: {
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

interface Category {
  id: 1;
  attributes: {
    name: string;
    parentCategory: Category;
  };
}
