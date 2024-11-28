import { NextRequest, NextResponse } from "next/server";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const posts: Post[] = [];



export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newPost: Post = {
      id: Date.now(),
      userId: body.userId || 0,
      title: body.title || "Untitled",
      body: body.body || "",
    };

    posts.unshift(newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    
    );

    

  }
}
