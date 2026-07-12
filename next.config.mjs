/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // served from github pages at /Portfolio (keep in sync with data/content.ts)
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  outputFileTracingRoot: import.meta.dirname,
  // hide the floating route/build badge during development
  devIndicators: false,
}

export default nextConfig
