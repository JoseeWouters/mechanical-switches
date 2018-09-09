module.exports = {
    module: {
        rules: [{
          test: /\.yml$/,
          use: 'js-yaml-loader',
        }]
    }
};