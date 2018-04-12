import React from 'react';
export default function (props) {
  let style={...props.style,
    position: 'absolute',
    content:"",
    height:'100%',
    width:'100%',
    top:0,
    left:0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 100%)'
  }
  return(
    <div style={style}></div>
  )
}
