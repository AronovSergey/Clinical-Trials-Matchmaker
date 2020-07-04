import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Layout from './Layout/Layout';
import Blog from './components/Blog/Blog'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	         <Layout>
	             <Blog/>
	         </Layout>
      	</BrowserRouter>
    );
  }
}

export default App;
