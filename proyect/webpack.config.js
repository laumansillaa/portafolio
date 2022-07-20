module.exports = {
    entry: "./src/main.jsx",
    resolve: {
        extensions: [".js", ".jsx"]
    }, 

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }, 
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif|pdf)$/i,
                type: 'asset/resource'
            }
        ]
    }
}