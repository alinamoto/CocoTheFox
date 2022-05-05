import React from 'react'
import Fox from "../images/fox.jpg"
import Email from "../images/mail_icon.png"
import Linkedin from "../images/linkedin_icon.png"

export default function Info() {
    return (
        <div className="profile"> 
            <img src={Fox} alt="profile-img" className="profile-img"/>
            <h2 className="profile_name">Coco The Fox</h2>
            <h5 className="profile_job">The Wild Life Animal</h5>
            <p className="profile_p">CocoTheFox@Website</p>
            <div className="buttons">
                <a target="_blank" rel="noreferrer" href="https://www.gmail.com">
                    <button className="email_button">
                        <img alt="" src={Email} className="email_icon"/>
                        <h6 className="email_text">Email</h6>
                    </button>
                </a>    
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
                    <button className="li_button">
                        <img alt="" src={Linkedin} className="li_icon"/>
                        <h6 className="li_text">Linkedin</h6>
                    </button>
                </a>
            </div>
        </div> 
    )
}

