"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface IUser {
  username: null | string;
  userId: null | string;
  token: null | string;
}

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const username = Cookies.get("identifier");
    const userId = Cookies.get("id");
    const token = Cookies.get("jwt");

    if (username && userId && token) {
      setUser((prev) => ({ ...prev, username, userId, token }));
      setUser;
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, user };
};
