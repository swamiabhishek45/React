// import React, { useState } from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({children}) => {

//   const [user, setUser] = useState(null);
//   return (
//     <UserContext.Provider value={{user, setUser}}>
//     {children}
//     </UserContext.Provider>
//   )
// }

// export default UserContextProvider;



import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
  return (
    <UserContext.Provider>
    {children}
    </UserContext.Provider>
  )

}

export default UserContextProvider;