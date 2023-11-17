import React from "react";
import "./About Us.css"
import image1 from "../Images/download.jpeg"
import image2 from "../Images/Trainer.jpeg"
import image3 from "../Images/Herbalife24 Advice.jpeg"
import image4 from "../Images/Free Photo.jpeg"
import image5 from "../Images/5 Exercises.jpeg"
import image6 from "../Images/Cardio.jpeg"

let AboutUs = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{ height: 350 }} >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: 350 }}>
                        <img src={image1} className="d-block w-50" alt="..." style={{ height: 400, marginLeft: 400 }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Proper Equipments</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: 350 }}>
                        <img src={image2} className="d-block w-50" alt="..." style={{ height: 400, marginLeft: 400 }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Trainers</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: 350 }}>
                        <img src={image3} className="d-block w-50" alt="..." style={{ height: 400, marginLeft: 400 }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Diet Plans</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="cards" style={{ height: 340 , marginTop: 25 }}>

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={image4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Get Trained</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={image5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Muscle Building</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

                <div className="card" style={{ width: 300, backgroundColor: "black" }}>
                    <img src={image6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cardio</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutUs;