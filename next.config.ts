import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const preview = process.env.VERCEL_ENV === "preview";
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ...(preview ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : [])
    ] }];
  }
};
export default nextConfig;