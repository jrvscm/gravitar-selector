import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import GravatarSelector from './GravatarSelector';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store = {store}>
	<GravatarSelector />
	</Provider>, 
	document.getElementById('root')
);