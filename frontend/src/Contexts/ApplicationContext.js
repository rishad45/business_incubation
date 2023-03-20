import {createContext,useState} from 'react'

export const ApplicationContext = createContext(null)  

export default function ViewApplication({children}){  
    const[application, setApplication] = useState([])    
    return(
        <ApplicationContext.Provider value={{application, setApplication}}>   
            {children}
        </ApplicationContext.Provider>   
    )

}