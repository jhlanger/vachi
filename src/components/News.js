import React from 'react'
import newsletter from "../assets/files/newsletter.pdf";
import crownImg from "../assets/images/crownImg.PNG";
import eagleImg from "../assets/images/eagleImg.PNG";
import news10Img from "../assets/images/news10Img.PNG";
import chsImg from "../assets/images/chsImg.PNG";
import newsImg from "../assets/images/newsImg.PNG";
import news102Img from "../assets/images/news102Img.PNG";
import kusiImg from "../assets/images/kusiImg.PNG";
import patchImg from "../assets/images/patchImg.PNG";
import eagle1Img from "../assets/images/eagle1Img.PNG";

const News = () => {
    return (
        <div className="bg-black pt-3">
            <div className="container">
                <div className="text-light pb-3">
                    <h1 className="text-warning mb-3">News/Newsletters</h1>
                    <h3 className="text-warning py-3"><a href={newsletter} target="_blank" rel="noreferrer">The VACHI VOICE: VACHI’s Own Newsletter</a></h3>
                    <h4 className="text-warning py-3 text-center">VACHI IN THE NEWS:</h4>
                    <p>October 7, 2009 – Coronado Eagle and Journal <a href={crownImg} target="_blank" rel="noreferrer">Article</a> (VACHI’s initiation)</p>
                    <p>In December 2009, Talk About Curing Autism Now highlighted VACHI in its national <a href="http://talkaboutcuringautism.org/enewsletters_archive/2009/enews-12-09-1.html" target="_blank" rel="noreferrer">e-newsletter</a>.</p>
                    <h4 className="text-warning py-3 text-center">New High School Club Seeks to Eliminate Hate</h4>
                    <p>Sticks and stones can break your bones but names can never hurt you. Right? While children have sung that song since before any of us can remember, a new club at Coronado High School in Coronado, California knows that words can hurt. Voices Against Cruelty, Hatred and Intolerance, known as VACHI for short, seeks to educate students, teachers and parents about the harm caused from hate motivated behavior, including bullying, harassment and name-calling. VACHI hopes that with education they can eliminate hate motivated behavior on campus.</p>
                    <p>VACHI, the brain-child of junior, Joey Langerman, who was looking for a novel idea for his Boy Scout Eagle Project, is believed to be the first club of its kind. But that fact doesn’t stop Joey from thinking globally. One of the first things Joey did was work with local web designer who donated his time for the project. VACHI now has a web presence that will help to bring the "No Hate" message to other schools around the country.</p>
                    <p>Joey was motivated when he read about several students who committed suicide after being bullied at their schools. Despite reporting those incidents to school officials, nothing changed and finally several teens killed themselves. While none of those suicides occurred in Coronado, Joey knew that kids at his school were contributing to the spread of hate. He hopes VACHI will spark a change. VACHI created, funded and placed <a href="/merchandise">"No Hate Zone"</a> signs (available on their website) in each classroom and teachers made sure that students were aware of the new philosophy. VACHI’s message is clear: every student is entitled to a physically and emotionally safe place to go to school.</p>
                    <p>VACHI;'s hope is to empower students to stop spreading hate and to stand up against hate when it is witnessed. In his research to start this club, Joey learned that most incidents of bullying and harassment are unreported because the victims are afraid and feel powerless. Joey thought that if it became "cooler" to speak out against hate than to side with the abuser, maybe the incidence of hate would be reduced. The message to students is simple: Think before YOU speak and if you see someone bullying, harassing or name calling another student, stand up and say, "Hey, that's not cool". If everyone then sided with the victim, the abuser would lose his power. "Hate behavior is about power. If we take the power away, we can stop the hate," says Joey.</p>
                    <p>VACHI recognizes that hate behavior is learned. VACHI encourages parents to model tolerance and help teach the "No Hate" message. VACHI is hoping other high school students will <a href="/chapter">start chapters</a> in their school (materials available on their website). The club's email is hatehurts@vachi.net. VACHI also has a Facebook page. Joey asks that everyone become a VACHI FAN on Facebook. Joey's final words ring strong: "Together, we can start a movement."</p>
                    <p>January 27, 2010 – <a href = {eagleImg} target="_blank" rel="noreferrer"> Coronado Eagle and Journal (No Name Calling Week Announcement)</a></p>
                    <p>May 6, 2010 – 10News.com <a href = {news10Img} target="_blank" rel="noreferrer">article</a> about VACHI’s survey at local highschool. VACHI founder interviewed.</p>
                    <p>January 10, 2011 – SignonSandiego.com wrote about a local <a href = {chsImg} target="_blank" rel="noreferrer">production</a> of The Laramie Project. VACHI helped promote the show and its founder was interviewed.</p>
                    <div className = "text-center py-3">
                        <img src={newsImg} alt="wristbandImg" style={{ width: "60%", height: "60%" }}></img>
                    </div>
                    <p>January 11, 1011 10News.com The local ABC affiliate <a href = {news102Img} target="_blank" rel="noreferrer">wrote</a> about the anti-gay picket announced by the Westboro Baptist Church against a local high school production of The Laramie Project – VACHI founder interviewed.</p>
                    <p>January 12, 2011 – KUSI <a href = {kusiImg} target="_blank" rel="noreferrer">wrote</a> about the anti-gay picket announced by the Westboro Baptist Church against a local high school production of The Laramie Project – VACHI founder interviewed.</p>
                    <p>January 15, 2011 - <a href = {patchImg} target="_blank" rel="noreferrer">Coronado Patch Reports</a> on Study Rally Against Hate Speech (VACHI founder pictured with VACHI "no hate" rally posters)</p>
                    <p>January 19, 2011 - <a href = {eagle1Img} target="_blank" rel="noreferrer">Coronado Eagle and Journal</a> - Letter to the Editor titled "Where Does Hate Come From" written by Vachi's founder.</p>

                </div>
            </div>


        </div>
    )
}

export default News
