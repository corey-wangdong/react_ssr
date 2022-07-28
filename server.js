
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { createRouter } from './src/router'

const app = express();

const PORT = 666;

app.use(express.static("dist"))

app.get('*', function (req, res) {
  console.log('req.url------', req.url);
  const context = {};
  const content = renderToString(createRouter('server')({ location: req.url, context }));
  console.log('context----', context);
  if (context.url) {
    res.redirect(context.url)
  } else {
    if (context.NOT_FOUND) res.status(404);

    res.send(`
      <!doctype html>
      <html>
          <title>ssr</title>
          <body>
              <div id="root">${content}</div>
              <script src="/client/index.js"></script>
          </body> 
      </html>
  `)
  }
})

app.listen(PORT, () => {
  console.log(`服务器已启动，正在监听${PORT}端口`);
})
