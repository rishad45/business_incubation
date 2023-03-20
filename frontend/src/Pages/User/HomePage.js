import React, { useContext, useEffect } from 'react'
//import libraries
import axios from 'axios'
import Header from '../../Components/Header/Header'
import HomePoster from '../../Components/HomePoster/HomePoster'

import { UserContext } from '../../Contexts/UserContext'

function HomePage() {
  const { setUser } = useContext(UserContext) 
  useEffect(() => {
    try {
      axios.post('userRouter/api/checkApplicationStatus', {},
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
          } 
        } 
      ).then((res)=>{
        if(res?.data.fresh){ 
          setUser('fresh') 
        }else if(res?.data.message.booked){
          setUser('booked')
        }
        else if(res?.data.success){ 
          setUser(res.data.message.status) 
        }else{
          setUser(null) 
        }
        // console.log(res.data.message.status)  
      })
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <div>
      <Header></Header>
      <HomePoster></HomePoster>
    </div>
  )
}

export default HomePage  