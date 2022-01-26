import React from 'react';
import membershipaggrement from "../assets/files/membershipaggrement.docx";

const MembershipForm = () => {
  return (

    <div className = "bg-black pt-3">
    <div className = "container">
      <div className = "text-light">
        <h1 className = "text-warning mb-3">Exemplar Membership Agreement</h1>
        <h3 className = "text-center">Voices Against Cruelty, Hatred and Intolerance (VACHI) Membership Agreement</h3>
        <p className = "text-center pb-3">[Insert Name of School]</p>
        <p>I, ____________________________, support VACHI’s mission to spread awareness of the consequences of hate-motivated behavior to [insert name of school] students, staff, and parents. As a member of VACHI, I will fully uphold its bylaws and will uphold the following mission statement:</p>
        <p className = "bold-text text-center italic-text"> “To educate, students, parents, and teachers about the consequences of hate- related behavior with the goal of reducing/ eliminating it in the future.”</p>
        <p>As a member of VACHI, I promise not to engage in any hate motivated behavior. Hate- motivated behavior is any act or statement motivated by hostility towards a victim’s actual or perceived race, ethnicity, national origin, immigrant status, gender, sexual orientation, religious belief, age, disability, or any other physical or cultural characteristic. I shall encourage my classmates to also refrain from such behavior. Should I observe any violations, I am obligated to take at least one of the following actions:</p>
        <ol typ="a">
          <li>Talk personally to the violator and let them know that their actions demonstrate hate motivated behavior. I will remind them of the consequences that could result if they had been caught by a teacher or administrator.</li>
          <li>If the action resulted in physical or emotional harm to another student,<span className = "bold-text">I am obligated to report the violator</span> to a teacher, administrator, or School counselor.</li>
        </ol>
        <p className = "bold-text">As a member of VACHI, I hereby authorize [insert name of school] Administration to report any disciplinary action taken against me for hate motivated behavior to VACHI’s executive committee.</p>
        <p>_____________________________________________ _______________</p>
        <p>Signature Date</p>
        <p>Student printed name ___________________________ Class of: ________</p>
        <p>Student E-mail:_______________________ Parent email: ________________________</p>
        <p>Student Cell Phone: ___________________ Home Phone: ________________________</p>
        
      

        <a href = {membershipaggrement} type="button" className="btn btn-light mx-3 my-3 ">Printable Version</a>
        
      </div>
    </div>


  </div>
  )
};

export default MembershipForm;
