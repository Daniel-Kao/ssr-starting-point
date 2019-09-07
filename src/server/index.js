const express = require('express');
const app = express();
import { render } from './utils';

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(render(req));
});

app.listen(3000, () => console.log('port listening on port 3000'));
