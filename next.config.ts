import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',
};

module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = ({
  images: {
    domains: ['images.pexels.com', 'img.freepik.com']
}
});


export default nextConfig;
