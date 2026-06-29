/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the tracing root to this project (a stray lockfile in $HOME otherwise
  // makes Next infer the wrong workspace root).
  outputFileTracingRoot: import.meta.dirname,
  async redirects() {
    return [
      {
        source: "/work/makerspace-rotterdam",
        destination: "/work/bouwkeet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
