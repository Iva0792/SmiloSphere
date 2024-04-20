const path=require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './index.php')
    }, output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    }
}