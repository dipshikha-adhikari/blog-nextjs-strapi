"use client";
import { RegistrationForm } from "@/components/auth/register";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const user = Cookies.get("username");
  const router = useRouter();
  if (user) {
    router.push("/");
  }
  return (
    <div>
      <header className="pb-sm text-center uppercase">Register</header>
      <RegistrationForm />
      <div className="py-sm flex gap-sm items-center">
        <p>Already have an account?</p>
        <Link href={"/auth/login"} className="text-secondary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Page;
