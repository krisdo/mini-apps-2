import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './components/App.js';
import { Provider } from "react-redux";
import store from "./store/index.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
