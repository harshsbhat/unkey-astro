import { Ratelimit } from "@unkey/ratelimit"

export const unkey = new Ratelimit({
  rootKey: import.meta.env.UNKEY_ROOT_KEY,
  namespace: "astro.example",
  limit: 3,
  duration: "30s",
  async: true
})
