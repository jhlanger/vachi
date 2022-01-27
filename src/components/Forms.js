import React from 'react'
import facultypowerpoint from '../assets/files/facultypowerpoint.ppt';
import adoptletter from '../assets/files/adoptletter.docx';
import survey from "../assets/webpages/survey.htm";
import bylaws from "../assets/webpages/bylaws.htm";

const Forms = () => {
    return (
        <div className="bg-black height-adjust-30 pt-3">
            <div className = "container">
                <div >
                    <h1 className = "text-light">Forms </h1>
                    <p className = "text-warning">A comprehensive anti-bullying, anti-harassment program must start with a district wide policy. The policy should be updated regularly to insure that it adequately serves the purposes of preventing discrimination, harassment, bullying and any other hate motivated behavior. Organizations such as the California School Board Association have model policies that can be adopted. Neighboring school districts may have already passed comprehensive policies that can be used as examples. The policies should include, at a minimum, a non-discrimination/harassment <a href = "/nondiscriminationpolicy">policy</a>, a sexual harassment <a href = "/sexualharrasmentpolicy">policy</a>, and a hate motivated behavior <a href = "/hatemotivatedbehaviorpolicy">policy</a>. The policies must have an easy to follow complaint procedure that applies to any complaint of discrimination, harassment or other hate-motivated behavior. In recognition that many victims of harassment and bullying will not report on their own behalf, the policies should mandate that any teacher who witnesses or is otherwise aware of any incident of harassment, bullying or other hate motivated behavior, should report to the administration on behalf of the student.</p>
                    <p className = "text-warning">In addition to district wide policies, each school in the district should clearly define for all students what prohibited behavior is. While the school should publish the rules for students to read, because many students will not take the time to read the published school rules, in any introductory assembly where students are reminded of appropriate school behavior, clear and specific definitions of hate motivated behavior must be provided. Many students simply don’t realize that the day to day name calling that has become part of student life is prohibited and hurtful. Each teacher should have a sign posted in his or her classroom that reinforces that name calling, harassment and bullying will not be tolerated. VACHI has created a “No Hate Zone” <a href = "/sign">sign</a> that can be used for this purpose.</p>
                    <p className = "text-warning">Finally, the best way to stop hate related behavior is for students to become empowered to stop it themselves. Witnesses to bullying, name calling and harassment need to be encouraged to stand up for the victims. Victims need to be told that they should speak up, loudly, and oppose their tormenter. For years, parents have told victims to ignore their bullies but that does not work. If it becomes “more cool” to not bully maybe bullying will stop. VACHI seeks to send the message to students that it is OK to shout out against name calling and to ask for help. VACHI seeks to embolden witnesses to stand up with the victim and shut the bullies down. Students who want to start a VACHI chapter can <a href = "/contact">contact</a> VACHI directly and get step by step instructions how to start a club. An exemplar <a href = "/membershipform">membership form</a>, exemplar <a href = {bylaws} target="_blank" rel="noreferrer">bylaws</a> and exemplar funding <a href = "/letters">letters</a> to raise funds in the community and solicit community partners are available to make it easy to help spread the Hate-Hurts message.</p>
                    <p className = "text-warning">Work with high school administration to conduct a <a href = {survey} target="_blank" rel="noreferrer" >survey</a> to determine the seriousness of the hate issues on your campus and help guide appropriate school wide responses including VACHI's <a href = "http://www.vachi.net/program.htm" target="_blank" rel="noreferrer" >"First Offender Program"</a> to substitute for ineffective zero tolerance policies when bullying behavior actually does occur. Talk to teachers using VACHI’s exemplar <a href={facultypowerpoint} download="facultypowerpoint.ppt">power-point presentation</a> to get their support. Ask your superintendent/principal/mayor to <a href={adoptletter} download="adoptletter.docx">adopt</a> No Name Calling Week in your school/community <a href = "https://www.glsen.org/no-name-calling-week" target="_blank" rel="noreferrer">(here)</a>.</p>
                    <p className = "text-warning">Get started today. Have a meeting. Post a <a href = "http://www.vachi.net/images/flier.jpg" target="_blank" rel="noreferrer">meeting notice</a> and take names on a membership sign in sheet.</p>
                </div>
            </div>

        </div>
    )
}

export default Forms



