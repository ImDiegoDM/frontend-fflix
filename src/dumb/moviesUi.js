import React from 'react';
import { Link } from 'react-router-dom';
import MovieUi from './movieUi';

const movies=['movie1','movie2','movie3','movie4','movie5']

function Movies(props) {
  return props.movies.map((item, index) => (
    <MovieUi width={props.width} movie={item} marginX={props.marginX} marginY={props.marginY} key={index}/>
  ));
}

function Categories(props) {
  console.log('test');
  return props.moviesByCategori.map((item, index)=>{
    return <Categorie categorie={item} key={index}/>
  })
}

export class Categorie extends React.Component{
  moviesWidth=400;
  marginX = 3;
  style={
    width:this.moviesWidth*movies.length*(this.marginX*2)+'px',
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
    height:'100%',
    boxSizing: 'border-box'
  }

  styleButtonLeft={
    color:'white',
    position: 'absolute',
    left:0,
    top:'50%',
    transform:'translateY(-50%)',
    lineHeight:'45px',
    fontSize:'45px',
    backgroundColor:'rgba(1,1,1,.3)',
    height:'100%',
    display:'flex',
    alignItems:'center',
    padding:'5px',
    cursor:'pointer'
  }

  styleButtonRight={
    color:'white',
    position: 'absolute',
    right:0,
    top:'50%',
    transform:'translateY(-50%)',
    lineHeight:'45px',
    fontSize:'45px',
    backgroundColor:'rgba(1,1,1,.3)',
    height:'100%',
    display:'flex',
    alignItems:'center',
    padding:'5px',
    cursor:'pointer'
  }

  render(){
    return (
      <div class="section" style={{marginTop:'30px',marginBottom:'30px'}}>
      <h6 class="pt-3 pl-3">{this.props.categorie.name}</h6>
      <div class="movies pl-4 pr-4" style={{position:'relative'}}>
        <div style={this.style} >
          <Movies movies={this.props.categorie.movies} width={this.moviesWidth} marginX={this.marginX}/>
        </div>
      </div>
    </div>
    )
  }
}

export class MoviesUi extends React.Component{

  render(){
    return(
      <div class="movie">
        <Categories moviesByCategori={this.props.moviesByCategori}/>
      </div>
    )
  }
}
