import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto px-4 h-12 items-center">
      <Link href="/">
        <h1 className="text-2xl font-semibold">BlogApp</h1>
      </Link>

      <Link
        href="/login"
        className="bg-zinc-50 text-zinc-950 px-2 py-1 rounded-lg hover:bg-zinc-100 active:bg-zinc-50"
      >
        Login
      </Link>
    </div>
  );
}
