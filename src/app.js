import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import Home from './components/Home';
import { BrowserRouter as Router,Route} from 'react-router-dom';
console.log('ola');

ReactDOM.render(<Provider store={store}>
  <Router>
    <Route path="/" component={Home}/>
  </Router>
</Provider>, document.getElementById('app'));
