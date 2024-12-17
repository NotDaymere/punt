/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
      additionalData: `
        @import "app/scss/_vars.scss";
        @import "app/scss/_mixins.scss";
      `,
  },
  experimental: { esmExternals: true },
  images: {
      domains: ['*'],
  },
  outputFileTracing: true
};

export default nextConfig;
