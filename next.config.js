/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    env: {
        api: "https://run.mocky.io/v3/096187a0-4cc7-4684-9cb4-f8ebb4c55cd2"
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
