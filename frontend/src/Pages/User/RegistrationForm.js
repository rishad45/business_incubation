import React, { useContext, useEffect, useState } from 'react'
//components
// import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import Header from '../../Components/Header/Header'
import { FormStepper } from '../../Components/TestFolder/FormStepper'
import { UserContext } from '../../Contexts/UserContext'
import Progress from '../../Components/Progress/Progress'
import axios from 'axios'
//style
import './list.css'
import { useNavigate } from 'react-router-dom'
function RegistrationForm() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // useEffect
  // useEffect(() => {
  //   getSlots()
  // }, []) 

  return (
    <div>
      <Header />
      {
        user === 'booked' && <div>Booked</div>
      }
      {
        user === 'fresh' ? <FormStepper /> : null
      }
      {
        user === 'New' ? <Progress progress='1' /> : null
      }
      {
        user === 'Pending' ? <Progress progress='2' /> : null
      }
      {
        user === 'Approved' ? <Progress progress='3' /> : null
      }
      {
        user === 'Approved' ? <button className='btn btn-large btn-success p-2' style={{ marginLeft: '48vw' }} onClick={()=>{
          navigate('/bookSlot')
        }}>Book a slot</button> : ''
      }

      
    </div>
  )
}

export default RegistrationForm  