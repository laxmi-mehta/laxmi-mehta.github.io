/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  outputFileTracingRoot: import.meta.dirname,
  // hide the floating route/build badge during development
  devIndicators: false,
}

export default nextConfig
