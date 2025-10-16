import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // TODO : disabled cacheComponents and checked Error: Route "/dashboard/invoices": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense
    // at Page (app/dashboard/invoices/page.tsx:15:36)
    // cacheComponents: true, // ppr: "incremental" ==> useless
  },
};

export default nextConfig;
