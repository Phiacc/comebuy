import React from 'react';
import{Link}from "react-router-dom";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="container">
            <div className='image-logo'></div>
             <div className="tag-names">
             <small className='trad-names'><span>Kasuwa .</span>Ahia <span>.Oja</span></small>
             <br/>
             <h5 className="tag">Bringing the market to your doorstep....</h5>
             </div>
          </div>
        );
    }
}

export default LandingPage
