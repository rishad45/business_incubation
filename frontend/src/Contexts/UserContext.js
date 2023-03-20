import {createContext, useState} from "react";

export const UserContext = createContext(null) 

export default function User({children}){   
    const[user,setUser] = useState('') 
    return(
         <UserContext.Provider value={{user,setUser}}>
            {children}  
         </UserContext.Provider> 
    )

}

