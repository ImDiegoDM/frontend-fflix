import React from 'react';
import RegisterUi from '../dumb/registerUi';
import axios from 'axios';
import { api } from '../env';
import { connect } from 'react-redux';
import history from '../history';

@connect((store)=>{return{register:store.register}})
export default class Register extends React.Component{

  handleEmailChange(event){
    this.props.dispatch({type:"REGISTER_EMAIL_CHANGE",payload:event.target.value});
  }

  handleNameChange(event){
    this.props.dispatch({type:"REGISTER_NAME_CHANGE",payload:event.target.value});
  }

  handlePasswordChange(event){
    this.props.dispatch({type:"REGISTER_PASSWORD_CHANGE",payload:event.target.value});
  }

  handleLoginChange(event){
    this.props.dispatch({type:"REGISTER_LOGIN_CHANGE",payload:event.target.value});
  }

  Register(){
    this.props.dispatch({type:"REGISTER_START"});
    axios.post(api+'/user',{ login: this.props.register.login,password: this.props.register.password,name:this.props.register.name,email:this.props.register.email }).then((response)=>{
      this.props.dispatch({type:"REGISTERED"});
      alert('registrado com sucesso')
      history.push('./login');
    }).catch((error)=>{
      alert('ops algum erro aconteceu, tente novamente')
      this.props.dispatch({type:"REGISTER_ERROR"});
    });
  }

  render(){
    return(
      <RegisterUi
      handleEmailChange={this.handleEmailChange.bind(this)}
      handlePasswordChange={this.handlePasswordChange.bind(this)}
      handleLoginChange={this.handleLoginChange.bind(this)}
      handleNameChange={this.handleNameChange.bind(this)}
      submit={this.Register.bind(this)}
      logging={this.props.register.fetching}/>
    )
  }
}
