import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import GravitarSelector from './GravitarSelector';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store = {store}>
	<GravitarSelector />
	</Provider>, 
	document.getElementById('root')
);