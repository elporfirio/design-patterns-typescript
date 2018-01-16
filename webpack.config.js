module.exports = {
    entry: './main',
    output: { filename: 'patterns.js' },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};