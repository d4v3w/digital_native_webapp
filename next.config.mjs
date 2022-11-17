/**
 * @type {import('next').NextConfig}
 */
const nextConfig = async (phase, { defaultConfig }) => {
  const config = {
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      STAGE: phase === 'phase-development-server' ? 'DEV' : 'PROD',
    },
    experimental: {
      appDir: true,
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.digitalnativeuk.com',
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
        },
      ],
      domains: ['images.ctfassets.net', 'www.digitalnativeuk.com'],
    },
    compiler: {
      styledComponents: true,
    },
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
  }
  return config
}

export default nextConfig
