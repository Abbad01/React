import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{ //children are any component likeheader, footer etc
    const [user, setUser]=React.useState(null);
return (
    <UserContext.Provider value={{user,setUser}}>
        {/* Any component inside this provider can now access both:

          The user value (read)

          The setUser function (write/update) */}

        {children};
    </UserContext.Provider>
)
}

export default UserContextProvider