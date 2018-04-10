import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return(
      <div class="home">
        <div class="logo">FFLIX</div>
          <Link to="/login">
            <button type="button" class="btn btn-primary signIn"><span>Entrar</span></button>
          </Link>
        <div class="header">
        </div>
      </div>
    );
  }
}
