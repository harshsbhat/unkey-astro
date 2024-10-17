import type { APIRoute } from 'astro';
import { unkey } from "../../lib/unkey";

export const GET: APIRoute = async ({ request }) => {
  const ipAddress = request.headers.get("x-forwarded-for") ?? "anonymous"
  const ratelimit = await unkey.limit(ipAddress);

  if (!ratelimit.success) {
    return new Response("Try again later", { status: 429 });
  }
  if (ratelimit.success) {
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
  
  else {
    return new Response("INTERNAL SERVER ERROR", { status: 500 });
  }
};  
