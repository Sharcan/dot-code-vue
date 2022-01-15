module.exports = {
    configureWebpack: {
        devServer: {
            proxy: process.env.VUE_APP_API_URL,
            headers: { "Access-Control-Allow-Origin": "*" }
        }
    }
}