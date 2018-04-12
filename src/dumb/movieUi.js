import React from 'react';
import { Link } from 'react-router-dom';
import ImageFilter from './imageFilter';
import { url } from '../env';


function ListButton(props) {
  if(props.addToMylist){
    return(
      <i class="fa fa-plus-circle" style={{...props.style,fontSize:'30px'}}aria-hidden="true"></i>
    )
  }
  return(
    <i class="fa fa-check-circle-o" style={{...props.style,fontSize:'30px'}}aria-hidden="true"></i>
  )
}

export default class MovieUi extends React.Component{
  constructor(props) {
      super(props);
      this.state = {hover: false,expanded:false}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.hover!=this.state.hover){
      if(this.state.hover){
        setTimeout(()=>{
          if(this.state.hover){
            this.setState({expanded: true});
          }
        },500);
      }else {
        this.setState({expanded: false});
      }
    }
  }

  tick() {
    this.setState({hover: !this.state.hover});
  }

  getStyle(){
    let baseStyle = {
      transition:'all .5s',
      backgroundSize:'cover',
      backgroundPosition:'center',
      cursor:'pointer',
      position:'relative',
      border:'1px solid black',
      margin:(this.props.marginY ? this.props.marginY : 0)+'px '+(this.props.marginX ? this.props.marginX : 0)+'px '
    }

    if(this.state.hover){
      return {...baseStyle,
        width:(this.props.width)+'px',
        backgroundImage:"url('"+url+'/images/'+this.props.movie.sampleImage+"')",
        height:'170%'
      }
    }
    return {...baseStyle,
      width:(this.props.width-this.props.width/3)+'px',
      backgroundImage:"url('"+url+'/images/'+this.props.movie.coverImage+"')",
      height:'100%'
    }
  }

  render(){
    return(
      <div class="movieInfo" onMouseEnter={this.tick.bind(this)} onMouseLeave={this.tick.bind(this)} style={this.getStyle()}>
        <i class="fa fa-play" aria-hidden="true" style={{position:'absolute',top:'50%',left:'50%',fontSize:'50px',transform:'translate(-50%,-50%)',color:'red',transition:'all '+(this.state.expanded ? 1 : .2)+'s',opacity:(this.state.expanded ? 1 : 0)}}></i>
        <ImageFilter style={{transition:'all '+(this.state.expanded ? 1.5 : .2)+'s',opacity:(this.state.expanded ? 1 : 0)}}/>
        <div style={{position:'absolute',bottom:'0',color:'white',paddingLeft:'5px',display:'flex',flexWrap:'wrap',width:'100%'}}>
          <div style={{width:'92%'}}>
            <p style={{transition:'all '+(this.state.expanded ? 1.5 : .2)+'s',opacity:(this.state.expanded ? 1 : 0),margin:'3px',fontSize:'18px'}}>{this.props.movie.name}</p>
            <p style={{transition:'all '+(this.state.expanded ? 1.5 : .2)+'s',opacity:(this.state.expanded ? 1 : 0),fontSize:'13px',margin:'0'}}>{this.props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
          </div>
          <div style={{width:'8%',display:'flex',alignItems:'center'}}><ListButton style={{transition:'all '+(this.state.expanded ? 1.5 : .2)+'s',opacity:(this.state.expanded ? 1 : 0)}} addToMylist={this.props.addToMylist}/></div>
        </div>
      </div>
    )
  }
}
