import React from 'react';
import ReactDOM from 'react-dom';
import GravitarSelector from './GravitarSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GravitarSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
