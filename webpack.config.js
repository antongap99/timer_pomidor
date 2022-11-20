const path = require('path');
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const target = mode ===  "development" ? "web" : "browserslist";
const devtool = mode === "development" ? "source-map" : undefined;

module.exports = {
    mode,   
    target, 
    devtool,    
    entry: 'src/js/index.js',
    outpuut: {
        filename: '[name]{contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }

    
}