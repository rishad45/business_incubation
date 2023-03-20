import './bookSlot.css'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import toast from 'react-hot-toast'
function BookSlot() {

  // slots available 
  const [slots, setSlots] = useState([])
  const [appId, setAppId] = useState([])
  // api call 
  const verifyAuth = async () => {
    await axios.post('userRouter/api/checkApplicationStatus', {},
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
          } 
        } 
    ).then((res) => {
      setAppId(res.data.message._id) 
      // alert(appId)
    })
  }
  const getSlots = async () => {
    const response = await axios.post('/slotRouter/api/availableSlots')
    setSlots(response.data.data)
  }

  useEffect(() => {
    getSlots()
    verifyAuth() 
    console.log("slots", slots);
  }, [])

  console.log(appId);
  return (
    <div>
      <Header></Header> 
      <div className='container totalBody'>
        <div className="row">
          <h4 className='pickText h5 mt-5 mb-5'>Pick your preferred time slot.</h4>
          <div className="slotBody ml-5">
            {
              slots.map((item, index) => {
                return <div className="slotDiv d-flex align-items-center justify-content-center flex-column" key={index} onClick={() => {
                  const payload = {
                    id: item._id,
                    applicationId : appId 
                  }
                  axios.post('/slotRouter/api/bookSlot',payload).then((res)=>{
                    toast.success(res.data.message)
                  }) 
                }}>
                  <i class="fa-solid fa-sun mb-3" style={{ color: 'white' }}></i>
                  <p className='text-white' style={{ fontFamily: 'fantasy', letterSpacing: '2px' }}>{item.startTime}</p>
                  <p className='text-secondary'>to</p>
                  <p className='text-white' style={{ fontFamily: 'fantasy' }}>{item.endTime}</p> 
                </div>
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookSlot 