const withImages = require('next-images')
module.exports = withImages()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    formats: ['image/webp'],
    },
};

module.exports = nextConfig