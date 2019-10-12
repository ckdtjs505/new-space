import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Newspace () {
  return ( 
    <div className="main">
      <div  className = "title">
          <h1>신우주항공을 탐험하다</h1>
          <h2>New space는 우주에 관련된 정보를 제공합니다</h2>
      </div>
      <div className="tap">
          <Link to = {"/simulation"} className="tap_content" ><h3>우주 시뮬레이션</h3></Link>
          <Link to = {"/search"} className="tap_content" ><h3>우주 검색</h3></Link>
          <Link to = {"/search"} className="tap_content" ><h3>신우주항공</h3></Link>
      </div>
    </div>
  );
}
export default Newspace;