import React from 'react';
import hateexemplarpolicy from "../assets/files/hateexemplarpolicy.docx";

const HateMotivatedBehaviorPolicy = () => {
  return (
    <div className = "bg-black pt-3">
    <div className = "container">
      <div className = "text-light">
        <h1 className = "text-warning">Hate Motivated Behavior Exemplar Policy</h1>
        <p>The Board of Trustees affirms the right of every student to be protected from hate-motivated behavior. It is the intent of the Board to promote harmonious relationships that enable students to gain a true understanding of the civil rights and social responsibilities of people in our society. Behavior or statements that degrade an individual on the basis of his/her actual or perceived race, ethnicity, culture, heritage, gender, sexual orientation, physical/mental attributes, religious beliefs or practices shall not be tolerated.</p>
        <p>Any student who feels that he/she is a victim of hate-motivated behavior shall immediately contact the principal or designee. If the student believes that the situation has not been remedied by the principal or designee, he/she may file a complaint in accordance with district complaint procedures. Upon receiving a complaint of hate motivated behavior, discrimination or harassment, the Coordinator of Non Discrimination shall immediately investigate the complaint in accordance with site-level grievance procedures specified in the district’s policies prohibiting Sexual Harassment. Where the Coordinator finds that hate motivated behavior has occurred, he/she shall take prompt, appropriate action to end the hate motivated behavior and address its effects on the victim.</p>
        <p>Staff who receive notice of hate-motivated behavior or personally observe such behavior shall notify the principal, Superintendent or designee, and law enforcement, as appropriate. Students demonstrating hate-motivated behavior shall be subject to discipline in accordance with Board policy and administrative regulation.</p>
        <p>In addition, the district shall provide counseling and appropriate sensitivity training and diversity education for students exhibiting hate-motivated behavior. The district shall also provide counseling, guidance and support, as necessary, to those students who are the victims of hate-motivated behavior.</p>
        <p>The Superintendent or designee shall ensure that staff receive appropriate training to recognize hate-motivated behavior and methods for handling such behavior in appropriate ways.</p>
        <p>The district shall provide age-appropriate instruction to help promote understanding of and respect for human rights. At the beginning of each school year, students and staff shall receive a copy of the district's policy on hate-motivated behavior.</p>
      

        <a href = {hateexemplarpolicy} type="button" className="btn btn-light mx-3 my-3 ">Printable Version</a>
        
      </div>
    </div>


  </div>

  )
};

export default HateMotivatedBehaviorPolicy;