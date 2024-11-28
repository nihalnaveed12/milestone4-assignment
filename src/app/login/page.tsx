"use client"
import { signIn } from "next-auth/react";

export default function Login() {
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn("google");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center  px-6 items-center h-screen gap-6"
    >
      <h1 className="text-2xl font-semibold">Login</h1>
      <div className="flex flex-col w-[20%] gap-4 items-center ">
        <button
          type="submit"
          className="bg-zinc-50 px-2 py-1 w-24 text-zinc-900 hover:bg-zinc-200 rounded-lg"
        >
          Login
        </button>
      
      </div>
    </form>
  );
}