"use client";

import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleAddPost = async () => {
    if (!title || !content) {
      alert("Both title and content are required.");
      return;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body: content }),
      
    });

    if (res.ok) {
      const newPost = await res.json();
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setTitle("");
      setContent("");
    } else {
      alert("Failed to add the post. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Dashboard</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
          required
        />
      </div>
      <button onClick={handleAddPost}>Add Post</button>

      <div>
        <h2>Posts</h2>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <ul className="grid grid-cols-2 gap-6 max-w-screen-lg mx-auto px-6">
            {posts.slice(0, 10).map((post: Post) => (
              <li
                className="bg-zinc-50 text-zinc-950 p-3 rounded-xl flex flex-col gap-4"
                key={post.id}
              >

                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <div>
                  <span className="mr-2 text-xl font-semibold">
                    Description:
                  </span>
                  <span>{post.body}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
