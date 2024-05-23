import { graphql } from "msw";

export const handlers = [
  graphql.query("parentCommentsQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        comments: {
          data: [
            { id: "1", attributes: { content: "First comment" } },
            { id: "2", attributes: { content: "Second comment" } },
          ],
        },
      }),
    );
  }),
];
