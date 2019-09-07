import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById('root'));
