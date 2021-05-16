module.exports = {
    plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": false }],
        ["@babel/plugin-proposal-class-properties", { "loose": false }],
        ["@babel/plugin-proposal-private-methods", { "loose": false }],

    ],
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
};