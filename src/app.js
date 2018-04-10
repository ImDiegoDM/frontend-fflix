import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import Home from './smart/home';
import Login from './smart/login';
import { BrowserRouter as Router,Route,Root,Switch} from 'react-router-dom';

ReactDOM.render(<Provider store={store}>
  <Router>
    <div class="root">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  </Router>
</Provider>, document.getElementById('app'));
