import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return(
      <div class="home">
        <div class="logo">FFLIX</div>
        <button type="button" class="btn btn-primary signIn"><span>Entrar</span></button>
        <div class="header">
        </div>
      </div>
    );
  }
}
