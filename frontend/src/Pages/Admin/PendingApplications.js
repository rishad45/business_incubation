import React,{useContext, useEffect,useState} from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import './Styles/Users.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
// context
import {ApplicationContext} from '../../Contexts/ApplicationContext';
import { useNavigate } from 'react-router-dom';

function PendingApplications() {
    //context
    const {setApplication} = useContext(ApplicationContext) 
    // navigate
    const navigate = useNavigate()
    // state
    const [pending, setPending] = useState([])
    const getPendingApplications = async () => {
        const response = await axios.post('/adminRouter/api/getPendingApplications')
        if (response.data.success) {
            setPending(response.data.data)
        }
    }

    // const viewdetails = () => {

    // }

    useEffect(() => {
        getPendingApplications()
    }, [])
    return (
        <Sidebar>
            <div className='mb-5'>
                <h3 className='heading'>New Applications</h3>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Application ID</th>
                        <th>User Id</th>
                        <th>Company Name</th>
                        <th>Owner Name</th>
                        <th>Email</th>
                        <th>Registered date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pending.map((item, index) => { 
                            return <tr key={index}> 
                                <td>{index}</td>
                                <td>{item._id}</td>
                                <td>{item.userId}</td>
                                <td>{item.company}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.createdAt}</td>
                                <td>
                                    <button className='btn btn-primary btn-small' onClick={()=>{
                                        setApplication(item)
                                        navigate('/admin/viewApplication')
                                    }}>
                                        View
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Sidebar>
    )
}

export default PendingApplications