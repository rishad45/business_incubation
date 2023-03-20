import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {ApplicationContext} from '../../Contexts/ApplicationContext';
function ApprovedApplications() {
    //contexts
    const {setApplication } = useContext(ApplicationContext)  
    //navigate
    let navigate = useNavigate()
    //state
    const [approved, setApproved] = useState([])
    // approved applications 
    const getApprovedApplications = async () => {
        const response = await axios.post('/adminRouter/api/getApprovedApplications')
        if (response.data.success) {
            setApproved(response.data.data) 
        }
    }

    useEffect(() => {
        getApprovedApplications()
    }, [])


    return (
        <Sidebar>
            <div className='mb-5'>
                <h3 className='heading'>Approved Applications</h3>
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
                        approved.map((item, index) => {
                            return <tr key={item._id}>
                                <td>{index}</td>
                                <td>{item._id}</td>
                                <td>{item.userId}</td>
                                <td>{item.company}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.createdAt}</td>
                                <td>
                                    <button className='btn btn-small btn-primary' onClick={() => {
                                        setApplication(item)     
                                        navigate('/admin/viewApplication')  
                                    }}>View</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Sidebar>
    )
}

export default ApprovedApplications