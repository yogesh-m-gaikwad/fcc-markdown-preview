import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    div);
  
  ReactDOM.unmountComponentAtNode(div);
});
