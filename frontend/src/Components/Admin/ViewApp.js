import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApplicationContext } from '../../Contexts/ApplicationContext'
import toast from 'react-hot-toast'

function ViewApp() {
    // navigate
    const navigate = useNavigate()
    const { application } = useContext(ApplicationContext)
    // approve 
    const handleClick = (id) => {
        alert(id)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <p className='h3' style={{ fontFamily: 'serif', fontWeight: '900' }}>{application.company}</p>
                            <p className='text-secondary' style={{ fontFamily: 'monospace' }}>{application.email}</p>
                        </div>
                        <div className='col-lg-4'>
                            {application.status !== 'Approved' && <button className='btn btn-md float-right approveBtn' style={{ border: '1px solid #3498db', color: '#3498db', fontSize: '1em', backgroundColor: 'transparent' }} onClick={async () => {
                                const response = await axios.post('/adminRouter/api/approveApplication', { id: application._id })
                                if (response.data.success) {
                                    toast.success(response.data.message)  
                                    navigate('/admin/approved')
                                } else {
                                    toast.error(response.data.message)
                                }
                            }}>Approve</button>}
                            {
                                application.status === 'New' && <button className='btn btn-md float-right approveBtn' style={{ border: '1px solid #3498db', color: '#3498db', fontSize: '1em', backgroundColor: 'transparent' }} onClick={async () => {
                                    const response = await axios.post('/adminRouter/api/moveToPending', { id: application._id })
                                    if (response.data.success) {
                                        toast.success(response.data.message)
                                        navigate('/admin/pending')
                                    } else {
                                        toast.error(response.data.message)
                                    }
                                }}>Move to Pending</button> 
                            }
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-5'>
                    <div className='row'>
                        <div className='ownerDetails col-3 d-flex align-items-center justify-content-center flex-column p-5' style={{ backgroundColor: '#D9F8C4', borderRadius: '1em' }}>
                            <p className='h5' style={{ fontWeight: 500, color: '#367E18' }}>{application.name}</p>
                            <p>{application.email}</p>
                            <p>{application.phone}</p>
                        </div>
                        <div className='col-8 ml-5 d-flex align-items-center flex-column justify-content-center' style={{ backgroundColor: '#F9F9F9', borderRadius: '1em', position: 'relative' }}>
                            <p className='h5 mt-1' >{application.company}</p>
                            <p className='mt-1'>{application.address}</p>
                            <p className='mt-1'>{application.city}</p>
                            {
                                application.incubation == true && <p>Virtual Incubation</p>}
                            {
                                application.physical === true && <p>Physical Incubation</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default ViewApp