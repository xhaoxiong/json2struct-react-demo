import React from 'react';
import ReactDOM from 'react-dom';
import Json2Go from './Json2Go';
import { Provider } from 'react-redux';
import store from './store';
import { message } from 'antd';

message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
const App = (
  <Provider store={store}>
    <Json2Go/>
  </Provider>
);


ReactDOM.render(App,document.getElementById('root'));
