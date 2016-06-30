import React from 'react';
import ReactDOM from 'react-dom';
// Local imports
import configureStore from './js/utils/ConfigureStore';
import Root from './js/components/Root';

const store = configureStore();
ReactDOM.render(
	<Root store={store}/>,
	document.getElementById('app')
);

