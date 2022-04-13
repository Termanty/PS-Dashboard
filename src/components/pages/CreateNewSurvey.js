import React from 'react'
import CookieConsent from 'react-cookie-consent';


function CreateNewSurvey() {
  
  return (
    <div>
      
      This is new survey...

     <div>
     <CookieConsent 
     debug={true}
     location="none"
    style={{ 
      background: "#25384F",   
      textAlign:"center",
      fontSize:"30px",
  }} 
    buttonStyle={{ 
      color: "#ffff",
      borderRadius:"3px",
      fontSize: "25px",
      background: "#D66434",
      height:"60px"
    }}
    expires={150}
    buttonText="Ok, I agreed"
     >
      We use cookies to enhance the users experience, see our <a  style={{ textDecoration:"none", color:"#D66434"}}href ="/policy" target="_blank" rel="noreferrer"> privacy policy </a> for details
      </CookieConsent>
     </div>
     
    </div>
  )
}

export default CreateNewSurvey
