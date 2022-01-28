import React from 'react'

const Footer = () => {
    return (
        <div className=" text-light bg-dark py-2">

            <div className="container footerDiv " >
                <div className="d-flex flex-wrap ">
                    
                    <div className="col-lg-4 col-xs-12 text-center display-block mx-auto">

                        <h5 className = "text-warning"> Navigation</h5>
                        <p > <a className = "text-light" href = "/">Home</a></p>
                        <p> <a className = "text-light" href = "/bullyingwebsites">Bullying Websites</a></p>
                        <p> <a className = "text-light" href = "/psa">Resources</a></p>


                    </div>
                    <div className="col-lg-4 col-xs-12 text-center display-block mx-auto">

                        <p> <a className = "text-light" href = "/news">News/Newsletter</a></p>
                        <p > <a className = "text-light" href = "/forms">Forms</a></p>
                        <p> <a className = "text-light" href = "/merchandise">Merchandise</a></p>
                        <p> <a className = "text-light" href = "/about">About</a></p>
                        

                    </div>
                    <div className="col-lg-4 col-xs-12 text-center display-block mx-auto">

                    <h5 className = "text-warning">Connect with Us</h5>

                        <p ><a className = "text-light" href = "/contact">Contact</a></p>
                        <p><a className = "text-light" href = "https://www.facebook.com/groups/289580134484949" target="_blank" rel="noreferrer">Follow us on Facebook </a></p>
                        <p > <a className = "text-light" href = "https://jhlanger.github.io/reactportfolio/" target="_blank" rel="noreferrer">Meet the Developer</a></p>
                      

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
