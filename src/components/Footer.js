import React from 'react'
import Instagram from '../images/instagram_icon.png'
import Facebook from '../images/facebook_icon.png'
import Twitter from '../images/twitter_icon.png'
import GitHub from '../images/github_icon.png'

export default function Footer() {
    return (
    <div className="footer">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
            <img src={Instagram} alt="instagram" className="instagram"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
            <img src={Facebook} alt="facebook" className="facebook"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com">
            <img src={Twitter} alt="twitter" className="twitter"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com">
            <img src={GitHub} alt="GitHub" className="github"/>
        </a>
    </div>
    )
}