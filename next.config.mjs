
/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

const withImages = require('next-images')

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
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
