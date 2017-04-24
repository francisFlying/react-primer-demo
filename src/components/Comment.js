import React from 'react';

export default function Comment(props){
  var styleFather={
    liStyle:{border:'10px solid red',fontSize:'14px'},
    h3Style:{color:'green'},
    pStyle:{color:'blue'}
  }

  return <li style={styleFather.liStyle}>
    <h3 style={styleFather.h3Style}>评论内容：{props.content}</h3>
    <p style={styleFather.pStyle}>评论人：{props.user}</p>
  </li>
}