import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/reducer";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";


import App from './App';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
