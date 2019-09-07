const express = require('express');
const app = express();
import routes from '../Routes';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import { getStore } from '../store';
const proxy = require('express-http-proxy');

app.use(express.static('public'));

app.use(
  '/todos',
  proxy('https://jsonplaceholder.typicode.com', {
    proxyReqPathResolver: function(req) {
      return '/todos' + req.url;
    },
  }),
);

app.get('*', (req, res) => {
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.url);

  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(req, store, routes));
  });
});

app.listen(3000, () => console.log('port listening on port 3000'));
