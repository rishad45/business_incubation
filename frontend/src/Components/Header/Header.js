import React,{useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import './header.css'
import { UserContext } from '../../Contexts/UserContext' 
function Header() {
    const navigate = useNavigate()
  const{user} = useContext(UserContext) 
    return ( 
        <Navbar bg="white" expand="lg">
            <Container className='d-flex justify-content-between'>

                <div className='logo'>
                    <Navbar.Brand><span className='logoTitle'>Catalyst</span></Navbar.Brand>
                </div>
                <div className='left'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-5">
                            <Nav.Link className='mr-5 ml-5 text-black'> <Link to='/'><span className='list-item'>Home</span></Link></Nav.Link>
                            <Nav.Link className='mr-5 text-black'><Link to='/apply'><span className='list-item'>Applications</span></Link></Nav.Link>
                            <Nav.Link className='text-black'><span className='list-item'>About us</span></Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='right'> 
                    <Nav className="mr-5"> 
                        <Nav.Link>
                            <Button className='btn-danger text-dark' onClick={()=>{
                                localStorage.clear('token')  
                                navigate('/login')
                            }}>Logout</Button>
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header