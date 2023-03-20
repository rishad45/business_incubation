import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import './Styles/Users.css' 


function AllUsers() {
    const [users, setUsers] = useState([])
    const getUsersData = async () => {
        try {
            const response = await axios.post('adminRouter/api/getAllusers')
            if (response.data.success) {
                setUsers(response.data.data)
            }
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        getUsersData()
    }, [])

    console.log("users", users);


    return (
        <Sidebar>
            <div className='mb-5'>
                <h3 className='heading'>All Users</h3>
            </div>

            {/* <Table columns={columns} dataSource={users} />  */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registered date</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                        return <tr key={index}>
                            <td>{index}</td>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.createdAt.slice(0,10)}</td> 
                            {/* <td><button className=''></button> </td> */}
                        </tr>
                        })
                    }
                </tbody>
            </Table>


        </Sidebar>
    )
}

export default AllUsers