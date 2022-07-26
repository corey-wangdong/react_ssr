const express = require('express');
import React from 'react';
const { renderToString } = require('react-dom/server');

const app = express();

const PORT = 666;

const App = class extends React.PureComponent {
  render() {
    return React.createElement('h2', null, 'hello world666');
  }
}

app.get('/', function (req, res) {
  const content = renderToString(React.createElement(App));
  res.send(content);
})

app.listen(PORT, () => {
  console.log(`服务器已启动，正在监听${PORT}端口`);
})
