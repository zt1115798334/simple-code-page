'use strict'

module.exports = {
    // Paths
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': {
            target: 'http://127.0.0.1:8083/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': 'api'
            }
        },
    },
    cssSourceMap: true

}
