import React from 'react';
import { Link } from 'react-router-dom';

function Submit(props) {
  if(props.logging){
    return (<button type="submit" onClick={props.submit} disabled="true" class="col-12 btn btn-primary mt-5"><i class="fa fa-pulse fa-spinner" aria-hidden="true"></i> Entrando...</button>)
  }else {
    return (<button type="submit" onClick={props.submit} class="col-12 btn btn-primary mt-5">Entrar</button>)
  }
}

export default class LoginUI extends React.Component{

  render(){
    return (
      <div class="login">
      <div class="header">
        <div class="">
          <Link to="/">
            <div class="logo">FFLIX</div>
          </Link>
        </div>
        <div class="loginBox">
          <h1>Entrar</h1>
          <div>
            <label for="exampleInputEmail1">Email</label>
            <input onChange={this.props.handleEmailChange} type="email" class="form-control"/>
            <label for="exampleInputEmail1">Senha</label>
            <input onChange={this.props.handlePasswordChange} type="password" class="form-control"  />
            <Submit submit={this.props.submit} logging={this.props.logging}/>
            <div class="form-check">
              <input type="checkbox" class="form-check-input"/>
              <label class="form-check-label" for="exampleCheck1">Lembre-se de mim</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
