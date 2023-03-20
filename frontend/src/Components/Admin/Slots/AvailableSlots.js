import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './slots.css'
function AvailableSlots(props) {
    // available
    // const [available, setAvailable] = useState([])
    // const getAvailable = async () => {
    //     const response = await axios.post(props.url) 
    //     console.log(response);
    //     setAvailable(response.data.data)
    // }
    // useEffect(() => {
    //     getAvailable()
    // }, [])

    return (
        <>
            <h1 className='mb-3 h4'>{props.title}</h1>
            <div className='slotsDiv d-flex mb-5'>
                {
                    props.data.map((item, index) => {
                        return <div className='d-flex flex-column  align-items-center p-5 justify-content-center singleDiv' key={index}>
                            <div id='box'>
                                {/* <p className=''>{item._id.slice(0, 10)}</p> */}
                                <p className='date mb-3'>{item.date.slice(0, 10)}</p>
                                <p className='time'>{item.startTime}</p>
                                <p className='text-secondary ml-4'>to</p>
                                <p className='time'>{item.endTime}</p>
                            </div>
                        </div> 
                    })
                }
            </div>
        </>
    )
}

export default AvailableSlots