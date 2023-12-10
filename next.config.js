/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    env: {
        api: "https://run.mocky.io/v3/3bb0f1e3-e8e7-4425-a500-5f61398b0b02"
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'random.imagecdn.app',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
