"use client";
import { login } from "@/app/auth/login/login";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formDataObject = {
      identifier: formData.get("identifier") as string,
      password: formData.get("password") as string,
    };

    toast.promise(login(formDataObject), {
      loading: "Logging",
      success: (data) => {
        router.push("/");
        return "success";
      },
      error: "Error",
    });
  };

  return (
    <div className="grid gap-10 place-items-center">
      <header>Login</header>
      <form className="grid gap-10 place-items-center" onSubmit={handleLogin}>
        <input type="text" name="identifier" id="identifier" className="p-4" />
        <input type="password" name="password" id="password" className="p-4" />
        <button type="submit" className="bg-gray-900 text-white p-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
