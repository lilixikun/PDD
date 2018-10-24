module.exports = {
    outputDir: 'dist',
    baseUrl: './',
    devServer: {
        port: 8085,
        host: 'localhost',
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //路径重写
                }
            }
        }
    }
}