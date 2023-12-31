/** @type {import('next').NextConfig} */

const nextConfig = {
  // images: {
  //   // loader: 'akamai',
  //   domains: ['bible25-data.s3.ap-northeast-2.amazonaws.com', '*'],
  // },
  reactStrictMode: false,
  cleanDistDir: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // webpack: config => {
  //   return {
  //     ...config,
  //     devtool: prod ? 'hidden-source-map' : 'inline-source-map',
  //   }
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  cleanDistDir: true,
  pageExtensions: ['jsx', 'tsx', 'mdx', 'js', 'ts'],
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
