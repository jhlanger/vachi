import React from 'react';
import sign from "../assets/files/sign.doc";
import signImg from "../assets/images/signImg.png";

const Sign = () => {
  return (
    <div className = "bg-black pt-3">
    <div className = "container">
      <div className = "text-light">
        <h1 className = "text-warning">"No Hate Zone" Sign</h1>
        <div className = "text-center"><img src={signImg} className="" alt="vachiImg" ></img></div>
        
      

        
        <div className = "text-center"><a href = {sign} type="button" className="btn btn-light mx-3 my-3 ">Printable Version</a></div>
        
      </div>
    </div>
    </div>

  )
};

export default Sign;
