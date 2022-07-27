import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';

import Login from '@/login';
import User from '@/user';

const app = express();

const PORT = 666;

app.use(express.static("dist"))

app.get('*', function (req, res) {
  console.log('req.url------', req.url);
  const content = renderToString(<div>
    <StaticRouter location={req.url}>
      <Route exact path="/user" component={User} ></Route>
      <Route exact path="/login" component={Login} ></Route>
    </StaticRouter>
  </div>);

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
