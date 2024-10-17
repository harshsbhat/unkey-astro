# Ratelimit Astro routes using Unkey

This app demonstrates @unkey/ratelimit and how you can rate limit your astro routes. Try the following curl request. The route is rate-limited for 3 requests per 30 seconds .

## Prerequisites

Create an account with [Unkey](https://app.unkey.com/)


## Setup Unkey 

1. Go to unkey [ratelimits](https://app.unkey.com/ratelimits)

2. Create a new namespace with the name `astro`

3. Go to settings/root-keys and create a root key with Ratelimit permissions

4. Add it in the .env file `UNKEY_ROOT_KEY`

## Quickstart

1. **Clone the repository:**

   ```bash
   git clone https://github.com/harshsbhat/unkey-astro.git
   cd unkey-astro
   ```
2. **Install the dependencies**

   ```bash
   pnpm install
   ```
  
3. **Start the project. It should start on port 4321**

   ```bash
   pnpm dev
   ```

## Usage

Try making requests to the ratelimited route. It should only allow 3 requests per 30 seconds:

```bash
curl http://localhost:4321/api/ratelimited
```
