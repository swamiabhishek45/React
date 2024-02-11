import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  
    const { user } = useContext(UserContext);
 

  if (!user) return <h2 style={{marginTop: '15px', }}>Please Login</h2>;

  return <h2 style={{marginTop: '15px', }}>Welcome {user.username} ! </h2>;
  
}

export default Profile;
