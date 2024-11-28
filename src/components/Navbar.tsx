"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  const [isLogin, setLogin] = useState<boolean>(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [status]);

  return (
    <div className="flex justify-between max-w-screen-xl mx-auto px-4 h-12 items-center">
      <Link href="/">
        <h1 className="text-2xl font-semibold">BlogApp</h1>
      </Link>
      {isLogin ? (
        <button
          onClick={() => signOut()}
          className="bg-zinc-50 text-zinc-950 px-2 py-1 rounded-lg hover:bg-zinc-100 active:bg-zinc-50"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/api/auth/signIn"
          className="bg-zinc-50 text-zinc-950 px-2 py-1 rounded-lg hover:bg-zinc-100 active:bg-zinc-50"
        >
          Login
        </Link>
      )}
    </div>
  );
}
