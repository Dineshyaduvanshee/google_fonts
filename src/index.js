import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "Dinesh";
const lname = "Yadav";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://picsum.photos/";

ReactDOM.render(
  <>
    <h1 className="heading">my first name is {fname} and my last name {lname}</h1>
    
   <div className='img_div'>
   <img src={img1} alt='ramdom images'/> 
   <img src={img2} alt='ramdom images'/>
    <a href={link} target='_pihu'>
    <img src={img3} alt='ramdom images'/>
    </a>
   </div>
   

  </>,
  document.getElementById("root")
)