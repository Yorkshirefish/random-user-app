import React, { useState, useEffect } from "react";

function UserProfile({userName, userPicture, userGender, userAge, userCountry, loadUser}) {

    console.log(userName)

    return (
        <div>   
            <h1>Make new Friends</h1>
            <h2>Meet {userName.first} {userName.last}</h2>
            <img src={userPicture} alt={userName.first + " " + userName.last} />
            <p>{userName.first} is a {userGender} from {userCountry}.</p>
            <p>{userGender === "male" ? "He" : "She"} is {userAge} years old.</p>
            <button onClick={loadUser}>Find new friend</button>
        </div>
    )
}

export default UserProfile;