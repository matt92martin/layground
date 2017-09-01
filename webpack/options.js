const path = require('path');

let prod = {
    inject: false,
    template: path.resolve(__dirname, '../templates/index.ejs'),
    title: 'Dis good',
    baseHref: '/',
    meta: [
        {
            name: 'description',
            content: 'A better default template for html-webpack-plugin.'
        }
    ],
    lang: 'en-US'
};

let dev = Object.assign({}, prod, {
    devServer: 'http://localhost:3001',
});


module.exports = {
    dev: dev,
    prod: prod
};