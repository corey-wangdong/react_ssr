import React from 'react';
import { Redirect, Route, Router, StaticRouter, Switch } from "react-router";
import routeConfig from "./routeConfig";
import { createBrowserHistory } from 'history';

const routers = routeConfig.map((conf, index) => {
  const { type, ...otherConfig } = conf;

  if (type === 'redirect') {
    return <Redirect {...otherConfig} key={index} />
  } else if (type === 'route') {
    return <Route {...otherConfig} key={index}></Route>
  }
})
export const createRouter = (type) => (params) => {
  if (type === 'client') {
    const history = createBrowserHistory();
    return <Router history={history}>
      <Switch>
        {routers}
      </Switch>
    </Router>
  } else if (type === 'server') {
    return <StaticRouter {...params}>
      <Switch>
        {routers}
      </Switch>
    </StaticRouter>
  }
}