import React from 'react'
import './Card.css'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaUsers } from "react-icons/fa6";



function Card() {
  return(
    

<div className='content'>
<div className="content-card" style={{
  background: "#a2a0e0 ",
  boxShadow: "0px 10px 20px 0px #8280b3",
  borderRadius: "10px"
}}>
  <div className="content-title">
  <FaUsers/>
  <div className='content-text'>Benificaries</div>
  </div>
  <div className='count'>1234</div>
 
</div>
<div className="content-card" style={{
   background: "#9290ca",
   boxShadow: "0px 10px 20px 0px #8280b3",
     borderRadius: "10px"
}}>
  <div className="content-title">
  <FaUsers/>
  <div className='content-text'>Volunteers</div>
  </div>
  <div className='count'>534</div>
 
</div>

<div className="content-card" style={{
 background:'#b5b3e6',
boxShadow: " 0px 10px 20px 0px #8280b3",
 
  borderRadius: "10px"
}}>
  <div className="content-title">
  <FaUsers/>
  <div className='content-text'>Alumni</div>
  </div>
  <div className='count'>70</div>
 
</div>
<div className="content-card" style={{
  background: "#8280b3",
  boxShadow: "0px 10px 20px 0px #8280b3",
  borderRadius: "10px"
}}>
  <div className="content-title">
  <FaUsers/>
  <div className='content-text'>Courses</div>
  </div>
  <div className='count'>4</div>
 
</div>
</div>
  )
}

export default Card;