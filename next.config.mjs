/**
 * @type {import('next').NextConfig}
 */
const nextConfig = async (phase, { defaultConfig }) => {
  console.log(`Phase: ${phase}`)
  const config = {
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      STAGE: phase === 'phase-development-server' ? 'DEV' : '',
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
  //console.log(`Config: ${JSON.stringify({ config, defaultConfig }, undefined, 2)}`)
  return config
}

export default nextConfig
