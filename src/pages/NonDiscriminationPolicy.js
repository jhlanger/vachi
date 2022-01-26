import React from 'react';
import nondisclosureexemplarpolicy from "../assets/files/non-disclosureexemplarpolicy.docx";

const NonDiscriminationPolicy = () => {
  return (
    <div className = "bg-black pt-3">
    <div className = "container">
      <div className = "text-light">
        <h1 className = "text-warning">Non Discrimination/Harassment Exemplar Policy</h1>
        <p>District programs and activities shall be free from discrimination, including harassment, with respect to a student’s actual or perceived sex, gender, ethnic group identification, race, national origin, religion, color, physical or mental disability, age or sexual orientation.</p>
        <p>The Board of Trustees shall ensure equal opportunities for all students in admission and access to the educational program, guidance and counseling programs, athletic programs, testing procedures, and other activities. School staff and volunteers shall carefully guard against segregation, bias and stereotyping in instruction, guidance and supervision. The district may provide male and female students with separate shower rooms and sexual health and HIV/AIDS prevention classes in order to protect student modesty.</p>
        <p>The Board prohibits intimidation or harassment of any student by any employee, student or other person in the district. Staff shall be alert and immediately responsive to student conduct which may interfere with another student's ability to participate in or benefit from school services, activities or privileges. Students who harass other students shall be subject to appropriate discipline, up to and including counseling, suspension and/or expulsion. An employee who permits or engages in harassment may be subject to disciplinary action, up to and including dismissal.</p>
        <p>The Board hereby designates the following position(s) as Coordinator(s) for Nondiscrimination to handle complaints regarding discrimination and inquiries regarding the district’s nondiscrimination policies:</p>
        <p>__________________________________________</p>
        <p>Any student who feels that he/she is being harassed should immediately contact the Coordinator for Nondiscrimination, the principal or any other staff member. Any student who observes an incident of harassment should report the harassment to a school employee, whether or not the victim files a complaint.</p>
        <p>Employees who become aware of an act of harassment shall immediately report the incident to the Coordinator for Nondiscrimination. Upon receiving a complaint of discrimination or harassment, the Coordinator shall immediately investigate the complaint in accordance with site-level grievance procedures specified in the district’s policies prohibiting Sexual Harassment. Where the Coordinator finds that harassment has occurred, he/she shall take prompt, appropriate action to end the harassment and address its effects on the victim.</p>
        <p>The Coordinator shall also advise the victim of any other remedies that may be available. The Coordinator shall file a report with the Superintendent or designee and refer the matter to law enforcement where required.</p>
      

        <a href = {nondisclosureexemplarpolicy} type="button" className="btn btn-light mx-3 my-3 ">Printable Version</a>
        
      </div>
    </div>


  </div>
  )
};

export default NonDiscriminationPolicy;
