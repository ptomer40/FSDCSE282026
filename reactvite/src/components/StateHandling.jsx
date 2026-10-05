import React, { useState } from 'react'
import cat from '../images/cat.png';
function StateHandling() {
    const[count,setCount]=useState(100);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0)
    const[catHeight,setCatHeight]=useState(200);
    const[catAngle,setCatAngle]=useState(30);

     function chnageBGColor(){
      setRed(Math.random()*255);
      setGreen(Math.random()*255);
      setBlue(Math.random()*255); 
     }

     function enhanceHeight(){
      setCatHeight(catHeight+10);

     }

     function imageRotate(){
       setCatAngle(catAngle+30);
     }
   
  return (
    <div>
        <h2>Change Background Color</h2>
    <div style={{backgroundColor:`rgb(${red},${green},${blue})`, border:'2px solid red', height:'300px',width:'300px', marginLeft:'400px'}}>
    <img src={cat} height={catHeight} width={200} style={{transform:`rotate(${catAngle}deg)`}}></img>
    </div>

    <div>
      <div>
      <h2>
        Color code:{red},{green},{blue}
        <h2>
          Height:{catHeight}
        </h2>
      </h2>
      </div>
   <button onClick={chnageBGColor}>ChangeBGColor</button>
   <button onClick={enhanceHeight}>Enhanceheight</button>
   <button onClick={imageRotate}>ImageRotate</button>

    </div>

    </div>
  )
}

export default StateHandling