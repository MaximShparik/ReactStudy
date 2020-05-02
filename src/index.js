import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
