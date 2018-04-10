import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginUI from '../dumb/loginUI';
import axios from 'axios';
import { api } from '../env'

@connect((store)=>{return{login:store.login}})
export default class Login extends React.Component{

  handleEmailChange(event){
    console.log(this.props);
    this.props.dispatch({type:"CHANGE_EMAIL",payload:event.target.value});
  }

  handlePasswordChange(event){
    console.log(this.props);
    this.props.dispatch({type:"CHANGE_PASSWORD",payload:event.target.value});
  }

  tryLogin(){
    this.props.dispatch({type:"LOGIN_START"});
    axios.post(api+'/login',{ login: this.props.login.email,password: this.props.login.password }).then((response)=>{
      this.props.dispatch({type:"LOGIN_SUCESS"});
    }).catch(()=>{
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