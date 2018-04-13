import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginUI from '../dumb/loginUI';
import axios from 'axios';
import { api } from '../env';
import { setCookie } from '../helpers/cookie';
import history from '../history';

@connect((store)=>{return{login:store.login}})
export default class Login extends React.Component{

  handleEmailChange(event){
    this.props.dispatch({type:"LOGIN_CHANGE_EMAIL",payload:event.target.value});
  }

  handlePasswordChange(event){
    this.props.dispatch({type:"LOGIN_CHANGE_PASSWORD",payload:event.target.value});
  }

  tryLogin(){
    this.props.dispatch({type:"LOGIN_START"});
    axios.post(api+'/login',{ login: this.props.login.email,password: this.props.login.password }).then((response)=>{
      this.props.dispatch({type:"LOGIN_SUCESS"});
      setCookie('token',response.data.token,15);
      setCookie('name',response.data.user.name,15);
      setCookie('email',response.data.user.email,15);
      setCookie('login',response.data.user.login,15);
      history.push('./movies');
    }).catch((error)=>{
      console.log(error);
      this.props.dispatch({type:"LOGIN_ERROR"});
    });
  }

  render(){
    // console.log(this.props.login);
    return(
      <LoginUI
      handleEmailChange={this.handleEmailChange.bind(this)}
      handlePasswordChange={this.handlePasswordChange.bind(this)}
      submit={this.tryLogin.bind(this)}
      logging={this.props.login.logging}
      />
    )
  }
}
