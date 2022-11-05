module.exports = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['www.digitalnativeuk.com'],
    },
    compiler: {
        styledComponents: true,
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        // [Webpack 5] Automatic Node.js Polyfills Removed
        // https://github.com/webpack/webpack/issues/11282
        // config.resolve.fallback = { util: require.resolve("webpack/lib/util/") };
        // config.resolve.fallback = { fs: false };

        // SVG support
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config
    },
}
