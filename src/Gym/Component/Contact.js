import React from "react";
import "./Contact.css"
import whatsapp from "../Images/whatsapp.png"
import facebook from "../Images/facebook.png"
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"

let Contact = () => {
    return (
        <>
            <div className="cards">

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={whatsapp} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Whatsapp</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Contact Here</a>
                    </div>
                </div>

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={facebook} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Facebook</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Contact Here</a>
                        </div>
                </div>

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={instagram} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Instagram</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Contact Here</a>
                        </div>
                </div>

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={twitter} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Twitter</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Contact Here</a>
                        </div>
                </div>

            </div>
        </>
    );
}

export default Contact;