import { db } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await serverAuth();

    const movieCount = await db.movie.count();
    const randomIntex = Math.floor(Math.random() * movieCount);

    const randomMovie = await db.movie.findMany({
      take: 1,
      skip: randomIntex,
    });
    return NextResponse.json(randomMovie[0]);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
