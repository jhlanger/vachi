import React from 'react'
import shirtImg from "../assets/images/shirtImg.PNG"
import wristbandImg from "../assets/images/wristbandImg.PNG"
import signImg from "../assets/images/signImg.png";

const Merchandise = () => {
    return (
        <div className="bg-black py-3">
            <div className="container text-light">
                <div>
                    <h1 className="text-warning"> Merchandise</h1>
                    <div className="d-flex flex-wrap py-3">
                        <div className="col-lg-6 col-xs-12 my-auto text-center">
                            <img src={shirtImg} alt="shirtImg" className="col-lg-4 col-xs-12" style={{ width: "80%", height: "80%" }}></img>
                        </div>
                        <div className=" col-lg-6 col-xs-12 ">
                            <h3 className="text-warning">To Order Shirts: </h3>
                            <p className="ml-3"> Go to: <a href="https://www.designashirt.com" target="_blank" rel="noreferrer">www.designashirt.com</a></p>
                            <p>Or email <a href="mailto: help@designashirt.com">help@designashirt.com</a></p>
                            <p>Ask for current pricing for VACHI final design</p>
                        </div>

                    </div>

                    <div className="d-flex flex-wrap py-3">
                        <div className="col-lg-6 col-xs-12 my-auto">
                            <h3 className="text-warning">To Order Wristbands: </h3>
                            <p>Contact <a href="mailto: Sales@kulayful.com">Sales@kulayful.com</a> for current pricing</p>
                            <p>Bracelet type is: DEBOSSED</p>
                            <p>Font message: hate hurts (LOGO) think before you speak</p>
                            <p>Font Style: Century Gothic</p>
                            <p>Logo can be filled with white or white and red</p>
                        </div>
                        <div className="col-lg-6 col-xs-12 my-auto text-center">
                            <img src={wristbandImg} alt="wristbandImg" style={{ width: "80%", height: "80%" }}></img>
                        </div>

                    </div>


                    <div className="d-flex flex-wrap py-3">
                        <div className="col-lg-6 col-xs-12 my-auto text-center">
                            <img src={signImg} alt="shirtImg" className="col-lg-4 col-xs-12" style={{ width: "60%", height: "60%" }}></img>
                        </div>
                        <div className=" col-lg-6 col-xs-12 ">
                            <h3 className="text-warning">VACHI Signs </h3>
                            <p>Approximately 6 x 6</p>
                            <p>Contact Allegra Print and Imaging, 619-295-8307, Ask for Vachi SIGN :</p>
                            <p>Contract <a href = "http://www.allegraprintsd.com" target="_blank" rel="noreferrer">http://www.allegraprintsd.com</a> for current pricing</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Merchandise
