/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React Strict Mode
  }
  
  module.exports = {
    nextConfig,
    eslint: {
      // If you must keep ignoring errors during builds, 
      // add a comment explaining why:
      // ignoreDuringBuilds: true, // Temporary: Address ESLint errors ASAP  
    },
  }
  