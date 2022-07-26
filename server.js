import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './src/app';

const express = require('express');
const app = express();

const PORT = 666;

app.use(express.static("dist"))

app.get('/', function (req, res) {
  const content = renderToString(<App />);
  res.send(`
    <!doctype html>
    <html>
        <title>ssr</title>
        <body>
            <div id="root">${content}</div>
            <script src="/client/index.js"></script>
        </body> 
    </html>
  `);
})

app.listen(PORT, () => {
  console.log(`服务器已启动，正在监听${PORT}端口`);
})
