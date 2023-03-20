import React,{useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'


function ProtectedRoutes(props) {  
    // function to get authentication data
    const getData = () => {

        try {
            const response = axios.post('/authRoute/verifyAuth', {},
                {
                    headers: { 
                        'Authorization': 'Bearer ' + localStorage.getItem('token') 
                    }  
                })  
            console.log(response)   
        } catch (err) { 
            localStorage.clear() 
            console.log(err)
        } 
    } 
    useEffect(() => { 
        getData() 
    }, []) 

    if (localStorage.getItem('token')) {
        return props.children 
    } else {
        localStorage.clear()
        return <Navigate to='/login'></Navigate> 
    }
}

export default ProtectedRoutes 