import React from 'react';
import ReactDOM from 'react-dom';
import GravatarSelector from './GravatarSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GravatarSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
