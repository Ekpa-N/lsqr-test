/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    env: {
        api: "https://run.mocky.io/v3/7babd0ca-8fe9-4057-8be3-0635005a3440"
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
