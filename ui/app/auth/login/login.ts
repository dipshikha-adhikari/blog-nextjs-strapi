"use server";
import { fetcher } from "@/lib/api";
import { cookies } from "next/headers";

export const login = async ({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}) => {
  try {
    const response = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
      {
        method: "POST",
        body: JSON.stringify({
          identifier,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      },
    );

    cookies().set("id", response.user.id);
    cookies().set("identifier", response.user.username);
    cookies().set("jwt", response.jwt);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login");
  }
};
