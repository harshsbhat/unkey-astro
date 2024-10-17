import type { APIRoute } from 'astro';
import { unkey } from "../../lib/unkey";

export const GET: APIRoute = async ({ request }) => {

  // This is a random UserId Completely fake. If you don't have a UserId you can use any unique identifier here.
  const userId = "userId_BYDjLrSNxkoGI33gfDDLc+ZYwTUGGfsVFEkCQ"
  const ratelimit = await unkey.limit(userId);

  if (!ratelimit.success) {
    return new Response("Try again later", { status: 429 });
  }
  else {
    return new Response(
      JSON.stringify({
        message: "Ratelimited route here",
        ratelimit: ratelimit,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

};  
