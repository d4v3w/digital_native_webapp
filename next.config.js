module.exports = {
    images: {
        domains: ['www.digitalnativeuk.com'],
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

        return config
    },
}