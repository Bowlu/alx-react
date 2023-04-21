import { resolve } from 'path';

export default {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
};