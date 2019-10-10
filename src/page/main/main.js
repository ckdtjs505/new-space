import React from 'react';
import {Link} from 'react-router-dom';
import BackgroundImg from '../../back.jpg';
export default class main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return ( 
      <div style={{  height : '972px',  backgroundPosition: "center", background : `url(${BackgroundImg})` , backgroundSize : "cover" }}>
        <div  style = {{ paddingTop : "8rem", marign : "auto"}}>
            <h1 style ={{ textAlign : "center", color : "white"}}>신우주항공을 탐험하다</h1>
            <h2 style ={{ textAlign : "center", color : "white"}}>New space는 우주에 관련된 정보를 제공합니다</h2>
        </div>
        <div style = {{paddingTop : "5rem",  width : "55rem", margin : "auto", display : "flex", justifyContent : "space-between"}}>
            <Link to = "/simulation" style = {{width : "250px", height : "400px", backgroundColor : "rgba(255,255,225, 0.7)", border : "3px solid white"}}></Link>
            <Link to = "/search" style = {{width : "250px", height : "400px", backgroundColor : "rgba(255,255,225, 0.7)", border : "3px solid white"}}></Link>
            <Link to = "/search" style = {{width : "250px", height : "400px", backgroundColor : "rgba(255,255,225, 0.7)", border : "3px solid white"}}></Link>
        </div>
      </div>
    );
  }
}