import type { APIRoute } from 'astro';
import { unkey } from "../../lib/unkey";

export const GET: APIRoute = async ({ request }) => {

  // This is a Completely fake UserId. If you don't have a UserId you can use any unique identifier like IP here.
  const userId = "userId_BYDjLrSNxkoGI33gfDDLc+ZYwTUGGfsVFEkCQ"

  const ratelimit = await unkey.limit(userId);
  if (!ratelimit.success){
      return new Response("try again later", { status: 429 })
    }

    return new Response(
      JSON.stringify({
        message: "Ratelimited route here",
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
};  
