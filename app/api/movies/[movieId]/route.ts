import { db } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { movieId: string } }
) {
  try {
    if (!params.movieId) {
      return new NextResponse("Movie Id missing", { status: 400 });
    }
    await serverAuth();

    const movie = await db.movie.findUnique({
      where: {
        id: params.movieId,
      },
    });

    if (!movie) {
      return new NextResponse("Movie not found", { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
