import React, { useState, useEffect } from "react";
import UserProfile from "./components/user-profile";
import { fetchRandomUser } from "./api/data";
import "./css/app.css"

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  async function loadUser() {
    setLoading(true);
    setError(null)

    try{
      const userData = await fetchRandomUser();
      setUser(userData);
    } catch(e) {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  console.log(user)


  return (
    <div className="main-cont">
      {loading && "Is Loading"}
      {error && "There was an error"}
      {user && !loading ? <UserProfile userName={user.name} userPicture={user.picture.large} userGender={user.gender} userAge={user.dob.age} userCountry={user.location.country} loadUser={loadUser} /> : ""}
    </div>
  );
}

export default App;
