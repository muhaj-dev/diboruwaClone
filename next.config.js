/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com"],
    
  },
  experimental: {
    instrumentationHook: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
