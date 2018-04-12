import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import Home from './smart/home';
import Login from './smart/login';
import Movies from './smart/movies';
import { Router,Route,Root,Switch } from 'react-router-dom';
import history from './history';

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <div class="root">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  </Router>
</Provider>, document.getElementById('app'));
