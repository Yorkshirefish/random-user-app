import React, { useState, useEffect } from "react";
import UserProfile from "./components/user-profile";
import { fetchRandomUser } from "./api/data";

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


  return (
    <div>
      <UserProfile userName={user.name}/>
    </div>
  );
}

export default App;
