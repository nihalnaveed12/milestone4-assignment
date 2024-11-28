"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setMessage("");
    if (res.ok) {
      setMessage("Login Successful");
      router.push("/dashboard");
    } else {
      const { error } = await res.json();
      setMessage(error);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center  px-6 items-center h-screen gap-6"
    >
      <h1 className="text-2xl font-semibold">
        Login
      </h1>
      <div className="flex flex-col w-[20%] gap-4 items-center ">
        <input
          type="text"
          placeholder="Username"
          className="bg-zinc-700 px-2 py-1 w-full rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-700 px-2 py-1 w-full rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-zinc-50 px-2 py-1 w-24 text-zinc-900 hover:bg-zinc-200 rounded-lg">Login</button>
        {message}
      </div>
    </form>
  );
}
