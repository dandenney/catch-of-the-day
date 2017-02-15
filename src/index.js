// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

import './css/style.css';

// Routing, using react-router

const Root = () => {
  return (
    <BrowserRouter>
      <routes>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </routes>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
