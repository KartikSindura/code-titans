/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
        "child_process": false, 
        "process":  false, 
        "fs": false, 
        "util": false, 
        "http": false,
        "https": false,
        "tls": false,
        "net": false,
        "crypto": false, 
        "path": false,
        "os": false, 
        "stream": false,
        "zlib": false,
        "dns": false
        }
      }
      return config
    },
  }
}