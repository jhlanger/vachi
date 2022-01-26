import React from 'react';
import exemplarfundingletter from "../assets/files/exemplarfundingletter.docx";

const Letters = () => {
  return (
    <div className = "bg-black pt-3">
    <div className = "container">
      <div className = "text-light">
        <h1 className = "text-warning mb-3">Exemplar Funding Letter</h1>
        <p>Dear ________________,</p>
        <p>I am starting a new club at [insert name of school] and looking for community partners. My project is to create a club at [insert name of school] called Voices Against Cruelty, Hatred and Intolerance (VACHI). VACHI’s mission will be to educate students, teachers and parents about the consequences of hate motivated behavior with the hope to reduce/eliminate it from the lives of [insert name of school] students.</p>
        <p>As you can well imagine, VACHI needs seed money to help get its message to the intended audience. We have to make signs for every classroom and the campus, buy instructional materials, and if we raise enough funds, we want to try to bring a guest speaker to an assembly. We want this to be a community project. In order to make that happen, we will provide each donor with a sign to place in the window of their business. These signs will bear VACHI’s principle message: Hate Hurts – Think Before You Speak.</p>
        <p>I am writing to you with the hope that your organization will make a financial donation to help VACHI move forward with its mission. I am happy to come and talk to your group about this project. Or, if you prefer, you can just send a check made payable to [insert person to receive funds] at [insert mailing address].</p>
        <p>Thank you for your consideration of this request.</p>
        
      

        <a href = {exemplarfundingletter} type="button" className="btn btn-light mx-3 my-3 ">Printable Version</a>
        
      </div>
    </div>


  </div>
  )
};

export default Letters;
