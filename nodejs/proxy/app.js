const express = require('express');
const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');
// const crypto = require('crypto');

const app = express();

// app.use(express.json());
app.use(cookieParser());

app.use('/api/login.json', createProxyMiddleware({
    target: 'https://staging.youte.am/api/login.json',
    changeOrigin: true,
    // selfHandleResponse: true, // required for onProxyRes to control output
    on: {
        proxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
            const response = responseBuffer.toString('utf8'); // convert buffer to string
            res.send(response);
        }),
    }
}));

// app.use('/', (req, res, next) => {
//     if (req.path === '/api/login.json') return next();
//
//     const token = req.cookies['auth_token'];
//
//     if (token !== 'test') {
//         return res.sendStatus(403);
//     }
//
//     next();
// });

// app.use('/', createProxyMiddleware({
//     target: 'https://staging.youte.am',
//     changeOrigin: true
// }));

app.listen(3000, () => {console.log('Server is up on port 3000')})