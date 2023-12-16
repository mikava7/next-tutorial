import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();
  const remaining = limiter.removeTokens(1);
  // console.log("remaining", remaining);
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title) {
    NextResponse.json({ message: "Missing requesting data" });
  }

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      API_Key: API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });
  const newTodo: Todo = await res.json();
  console.log("newTodo", newTodo);
  return NextResponse.json(newTodo);
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) {
    NextResponse.json({ message: "Todo id required" });
  }

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      API_Key: API_KEY,
    },
  });

  return NextResponse.json({ message: `todo was ${id} deleted` });
}

export async function PUT(request: Request) {
  const { id, userId, title, completed }: Todo = await request.json();

  if (!userId || !title || typeof completed !== "boolean") {
    NextResponse.json({ message: "Missing requesting data" });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      API_Key: API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: typeof completed === "boolean" ? completed : false,
    }),
  });
  const updatedTodo: Todo = await res.json();
  // console.log("newTodo", newTodo);
  return NextResponse.json(updatedTodo);
}
