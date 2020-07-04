import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';


const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
