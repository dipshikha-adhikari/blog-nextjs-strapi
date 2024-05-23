import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth } from "@/hooks/use-auth";
import { useLikes } from "@/hooks/use-likes";
import { MockedProvider } from "@apollo/client/testing";
import { parentCommentsQuery } from "@/graphql/queries";
import CommentsContainer from "../comments-container";

jest.mock("@/hooks/use-auth");
jest.mock("@/hooks/use-likes");

const mockUseAuth = useAuth as jest.Mock;
const mockUseLikes = useLikes as jest.Mock;

describe("CommentsContainer", () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({ user: { userId: "1" } });
    mockUseLikes.mockReturnValue({
      handlePostLike: jest.fn(),
      isPostLiked: false,
    });
  });

  it("renders comments and handles interactions", async () => {
    const post = {
      id: "1",
      attributes: {
        title: "",
        createdAt: new Date(),
        content: "f",
        slug: "f",
        description: "ddd",
        featuredImage: {
          data: null,
        },
        category: {
          id: "string;",
          attributes: {
            name: "string;",
            parentCategory: {
              data: null,
            },
          },
        },
        author: {
          data: {
            id: "string",
            attributes: {
              username: "string",
              email: "string",
              bio: " string",
              createdAt: new Date(),
              avatar: {
                data: {
                  attributes: {
                    url: "string",
                    formats: {
                      thumbnail: {
                        url: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        post_like: { data: { attributes: { users: { data: [] } } } },
      },
    };

    render(
      <MockedProvider
        mocks={[
          {
            request: { query: parentCommentsQuery, variables: { postId: "1" } },
            result: {
              data: {
                comments: {
                  data: [
                    { id: "1", attributes: { content: "First comment" } },
                    { id: "2", attributes: { content: "Second comment" } },
                  ],
                },
              },
            },
          },
        ]}
        addTypename={false}
      >
        <CommentsContainer post={post} />
      </MockedProvider>,
    );

    // Verify the input for adding a comment is present
    expect(screen.getByPlaceholderText("Add a comment")).toBeInTheDocument();

    // Verify comments are rendered
    await screen.findByText("First comment");
    await screen.findByText("Second comment");

    // Test like button
    fireEvent.click(screen.getByRole("button", { name: /like/i }));
    expect(mockUseLikes().handlePostLike).toHaveBeenCalled();
  });
});
