/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.0.3"],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
