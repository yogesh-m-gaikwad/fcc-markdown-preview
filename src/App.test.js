import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

test('App loads', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  let app = component.toJSON();
  expect(app).toMatchSnapshot();

  expect(app).toMatchSnapshot();
});