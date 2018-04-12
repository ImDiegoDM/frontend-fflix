import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {MoviesUi} from '../dumb/moviesUi';
import { api } from '../env';
import { isAuth } from '../helpers/auth';
import history from '../history';
import axios from 'axios'

@connect((store)=>{return{movies:store.movies}})
export default class Movie extends React.Component{

  constructor(props){
    super(props);
    let user = isAuth();
    if(user ==null){
      history.push('./login');
    }
    axios.defaults.headers.common['Authorization'] = user.token;
    this.getMovies();
    console.log(this.props);
  }
  getMovies(){
    this.props.dispatch({type:"FETCH_MOVIES_START"});
    axios.get(api+'/movies').then((response)=>{
      this.props.dispatch({type:"FETCHED_MOVIES",payload:response.data});
    }).catch((error)=>{
      console.log(error);
      history.push('./login');
      this.props.dispatch({type:"FETCHED_MOVIES_ERROR"});
    })
  }

  render(){
    return(
      <MoviesUi moviesByCategori={this.props.movies.moviesByCategorie}/>
    )
  }
}
