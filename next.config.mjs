/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lostarkmarket.online",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
}

export default nextConfig
