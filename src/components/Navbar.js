import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navbarData = [
        {
            title: "Home",
            path: "/",
            cName: 'nav-text'
        },
        {
            title: "Bullying Websites",
            path: "/bullyingwebsites",
            cName: 'nav-text'
        },
        {
            title: "PSA's",
            path: "/psa",
            cName: 'nav-text'
        },
        {
            title: "News/Newsletter",
            path: "/news",
            cName: 'nav-text'
        },
        {
            title: "Forms",
            path: "/forms",
            cName: 'nav-text'
        },
        {
            title: "Merchandise",
            path: "/merchandise",
            cName: 'nav-text'
        },
        {
            title: "Contact Us",
            path: "/contact",
            cName: 'nav-text'
        }
    ];
    return (
        <div className = "navBarDiv">

            <div className="navBarList navBarListbg pt-3">
                <ul className="">
                    {navbarData.map((item, index) => {
                        return (

                            <Link to={item.path} className="navBarList">
                                <li key={index} className={item.cName}>{item.title}</li>
                            </Link>


                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Navbar
