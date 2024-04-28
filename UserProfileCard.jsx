import React from "react"
import './UserProfileCard.css'
import profile_icon from '../UserProfileCard/markzuck.jpeg'

const UserProfileCard = () => {
    return(
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Mark Zuckerberg</div>
            <div className="profile-discription">
            Mark Elliot Zuckerberg is an American businessman and philanthropist. 
            He co-founded the social media service Facebook, along with his Harvard roommates in 2004,
             and its parent company Meta Platforms, of which he is chairman, chief executive officer and 
             controlling shareholder
            </div>
            <div className="profile-button"><a href="mailto:zuck@fb.com">Contact Me</a></div>
          </div>
        </div>
    )
}
export default UserProfileCard