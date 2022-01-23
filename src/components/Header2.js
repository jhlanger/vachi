import React from 'react'
import vachiImg from "../assets/images/vachiImg.PNG"

const Header2 = () => {
    return (
        <div className="header2Bg text-light bg-dark">

            <div className="container">
                <div className="d-flex flex-wrap ">
                    <div className="col-lg-6 col-xs-12 text-center">
                        <img src={vachiImg} className="" alt="vachiImg" style={{ width: "200px", height: "200px" }}></img>
                    </div>
                    <div className="col-lg-6 col-xs-12 text-center">

                        <h1>Hate Hurts </h1>
                        <h2> Think Before You Speak</h2>
                        <a href = "/psa" type="button" className="btn btn-light mx-3 mt-3">Take the Tour</a>
                        <a href = "/chapter" type="button" className="btn btn-light mx-3 mt-3">Start A Chapter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header2
