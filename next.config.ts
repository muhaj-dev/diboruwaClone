/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com"],
    
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
