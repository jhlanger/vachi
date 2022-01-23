import React from 'react'

const Home = () => {
    return (
        <div className="headerDiv bg-black height-adjust-30 pt-3">
            <div className = "container">
               

                <div className="d-flex flex-wrap">
                    <div className="col-lg-6 col-xs-12 px-3">
                        <h1 className = "text-light">What is VACHI?</h1>
                        <p className = "text-warning">Voices Against Cruelty, Hatred and Intolerance (VACHI) is an organization dedicated to educating students, teachers and parents about the consequences of hate-motivated behavior (such as bullying, name calling and harassment) with the hope that with education will come the elimination of this type of behavior on school campuses across the country.</p>
                        <h1 className = "text-light">What Can I Do?...</h1>
                        <p className = "text-warning">The most effective way to stop hate behavior on school campuses is to teach every student who is a witness to take a stand. Positive peer pressure can make a big difference</p>
                        <h1 className = "text-light">Get Involved...</h1>
                        <p className = "text-warning">VACHI wants students to be part of the solution instead of the problem. Start a chapter now at your school to stop hate behavior now.</p>
                    </div>

                    <div className="col-lg-6 col-xs-12 px-3">
                        <h1 className = "text-light">Did You Know...</h1>
                        <ul>
                            <li className = "text-warning pb-2">The California Healthy Kids Survey revealed that 37% of middle and high school students reported bullying or harassment – 75% of the reported incidents were bias related (race, nationality, sexuality, religion, gender, or disability).</li>
                            <li className = "text-warning pb-2">Reports reveal that in 2/3 of recent school shootings, the attacker had previously been bullied.</li>
                            <li className = "text-warning pb-2">While bullying, harassment and name calling is widespread, most incidents are never reported; victims are afraid and the majority believe that school professionals will respond poorly.</li>
                        </ul>
                        <h3 className = "text-light " >Vachi Wants To Change These Statistics</h3>
                        <div className = "text-center"><a href = "/chapter" type="button" className="btn btn-light ">Start A Chapter</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
