import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import AddSlots from '../../Components/Admin/Slots/AddSlots'
import AvailableSlots from '../../Components/Admin/Slots/AvailableSlots'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import toast from 'react-hot-toast'
function Slots() {
    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState({
        date: null,
        startTime: '',
        endTime: ''
    })

    // control form change
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        console.log(value);
    }

    // submit Form
    const submitForm = async (e) => {
        e.preventDefault()
        const response = await axios.post('/slotRouter/api/createSlot', value)
        console.log(response)
        if (response.data.success) {
            toast.success(response.data.message)
            handleClose()

        } else {
            toast.error(response.data.message)
            handleClose()
        }

    }

    const reload = () => {
        window.location.reload() 

    }
    const [available, setAvailable] = useState([])
    const getAvailable = async () => {
        const response = await axios.post('/adminRouter/api/getPendingApplications') 
        console.log(response);
        setAvailable(response.data.data)
    }
    useEffect(() => {
        getAvailable() 
    },[])

    return (
        <Sidebar>
            <div>
                <button className='btn btn-md btn-secondary float-right' variant="primary" onClick={handleShow}>Add Slot</button>
            </div>
            <AvailableSlots title="Available Slots" data = {available} /> 
            <AvailableSlots title="Booked Slots" data={available} /> 
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch static backdrop modal
                </Button> */}

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    onExit={reload}
                >
                    <form onSubmit={submitForm}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a Slot</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            Select date : <input type='date' name='date' style={{ border: '2px solid black' }} value={value.date} onChange={handleChange} ></input><br />
                            Pick Starting Time : <input type='text' name='startTime' placeholder='10 AM' value={value.startTime} onChange={handleChange}></input><br />
                            Pick Ending Time : <input type='text' placeholder='10 PM' name='endTime' value={value.endTime} onChange={handleChange}></input>

                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn btn-md btn-danger' onClick={handleClose}>Close</button>
                            <button className='btn btn-md btn-success'>Create</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        </Sidebar>


    )
}

export default Slots