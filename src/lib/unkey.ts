import { Ratelimit } from "@unkey/ratelimit"

export const unkey = new Ratelimit({
  rootKey: import.meta.env.UNKEY_ROOT_KEY,
  namespace: "astro",
  limit: 3,
  duration: "10m",
  async: true
})
