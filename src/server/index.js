const express = require('express');
const app = express();
import routes from '../Routes';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import { getStore } from '../store';

app.use(express.static('public'));

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
