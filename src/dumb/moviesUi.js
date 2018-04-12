import React from 'react';
import { Link } from 'react-router-dom';
import MovieUi from './movieUi';

const movies=['movie1','movie2','movie3','movie4','movie5']

function Movies(props) {
  return movies.map((item, index) => (
  <MovieUi width={props.width} marginX={props.marginX} marginY={props.marginY} key={index}/>
));
}

export default class MoviesUi extends React.Component{
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
    return(
      <div class="movie">
        <div class="section">
          <h6 class="pt-3 pl-3">Action</h6>
          <div class="movies pl-4 pr-4" style={{position:'relative'}}>
            <div style={this.styleButtonLeft}><i style={{transform:'translateY(-10%)'}} class="fa fa-angle-left" aria-hidden="true"></i></div>
            <div style={this.style} >
              <Movies width={this.moviesWidth} marginX={this.marginX}/>
            </div>
            <div style={this.styleButtonRight}><i style={{transform:'translateY(-10%)'}} class="fa fa-angle-right" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    )
  }
}
