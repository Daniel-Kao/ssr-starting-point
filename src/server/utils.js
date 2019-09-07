import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';

export const render = (req, store, routes) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </StaticRouter>
    </Provider>,
  );

  return `
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script>window.context = {
          state: ${JSON.stringify(store.getState())}
        }
        </script>
        <script src='index.js' /></script>
      </body>
    </html>
  `;
};
