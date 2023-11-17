import React from "react";
import "./Home.css"

let Home = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="temp" style={{paddingTop:100}}>
                        <h4>SHAPE YOUR BODY</h4>
                        <h1>BE <strong style={{color:"orangered"}}>STRONG</strong></h1>
                        <h1>TRAINING HARD</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;