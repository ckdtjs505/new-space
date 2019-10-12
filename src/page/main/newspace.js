import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import {IoIosRocket, GiEarthAmerica, IoIosSearch} from 'react-icons/all'

function Newspace () {
  return ( 
    <div className="main">
      <div  className = "title">
          <h1>신우주항공을 탐험하다</h1>
          <h2>New space는 우주에 관련된 정보를 제공합니다</h2>
      </div>
      <div className="tap">
          <Link to = {"/simulation"} className="tap_content" >
            <div>
              <h3 className="tap_title">우주 시뮬레이션</h3>
               <GiEarthAmerica className="icon"></GiEarthAmerica>
              <h4 className="tap_subtitle">우주 경험 <br/> 하러가기</h4>
            </div>
          </Link>
          <Link to = {"/search"} className="tap_content" >
            <div>
              <h3 className="tap_title">우주 검색</h3>
               <IoIosSearch className="icon"></IoIosSearch>
              <h4 className="tap_subtitle"> 우주 이미지 <br/> 무료로 다운로드</h4>
            </div>
          </Link>
          <Link to = {"/search"} className="tap_content" >
          <div>
              <h3 className="tap_title">신우주항공</h3>
               <IoIosRocket className="icon"></IoIosRocket>
              <h4 className="tap_subtitle">우주란 <br/> 무엇일까?</h4>
            </div>
          </Link>
      </div>
    </div>
  );
}
export default Newspace;