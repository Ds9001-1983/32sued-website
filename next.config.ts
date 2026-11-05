import type { NextConfig } from "next";

const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
  },

  async headers() {
    // Entwurf: noindex überall, bis NEXT_PUBLIC_ALLOW_INDEXING=true gesetzt ist. Danach nur noch auf Nebenadressen.
    if (process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true") {
      return [{ source: "/:path*", headers: noindex }];
    }
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) return [];
    // Next.js liest den Host-Wert als Regex (^…$), deshalb die Punkte maskieren.
    const hauptHost = new URL(siteUrl).hostname.replace(/\./g, "\\.");
    return [
      { source: "/:path*", missing: [{ type: "host", value: hauptHost }], headers: noindex },
    ];
  },
};

export default nextConfig;
