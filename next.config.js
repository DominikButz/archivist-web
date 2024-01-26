
/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      providerImportSource: '@mdx-js/react',
    },
  })

module.exports = withImages()


const nextConfig = {
    images: {
        formats: ['image/webp'],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig)