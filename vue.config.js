const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

module.exports = {
    configureWebpack: {
        devServer: {
            proxy: process.env.VUE_APP_API_URL,
            headers: { "Access-Control-Allow-Origin": "*" }
        },
        plugins: [
            new MonacoWebpackPlugin({
              languages: ["javascript"],
              features: ["coreCommands", "find"],
            }),
        ],
    },
    chainWebpack: (config) => {
        config.resolve.alias.set(
            "vscode",
            path.resolve(
                "./node_modules/monaco-languageclient/lib/vscode-compatibility"
            )
        );    
    },
    transpileDependencies: [
        "monaco-editor"
    ]
}