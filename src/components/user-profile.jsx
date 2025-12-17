import React from "react";
import '../css/user-profile.css';

function UserProfile({userName, userPicture, userGender, userAge, userCountry, loadUser}) {

    console.log(userName)

    return (
        <div className="user-profile">   
            <h1>Make new Friends</h1>
            <h2>Meet <span className={userGender === "male" ? "male-name" : "female-name"}>{userName.first} {userName.last}</span></h2>
            <img src={userPicture} alt={userName.first + " " + userName.last} />
            <p>{userName.first} is a {userGender} from {userCountry}. <br /> {userGender === "male" ? "He" : "She"} is {userAge} years old.</p>
            <button onClick={loadUser}>Find new friend</button>
        </div>
    )
}

export default UserProfile;