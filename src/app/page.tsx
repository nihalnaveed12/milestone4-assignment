

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await res.json()
  
  return (
    <div>
      <h1 className="text-center pt-10 pb-6 text-4xl font-bold">Blog Posts</h1>
      <ul className="grid grid-cols-2 gap-6 max-w-screen-lg mx-auto px-6">
        {posts.slice(0 ,10).map((post: Post) => (
          <li
            className="bg-zinc-50 text-zinc-950 p-3 rounded-xl flex flex-col gap-4"
            key={post.id}
          >
            <p>{post.id}</p>

            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <div>
              <span className="mr-2 text-xl font-semibold">Description:</span>
              <span>{post.body}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
