import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import { useContext } from 'react';


const Header = () => {
    const { user,logOutUser} = useContext(AuthContext);
    console.log(user);

    const handleLogout = ()=>{
        logOutUser()
        .then(result=> {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.log('error',error);
        })
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='mb-3' >
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to={'/home'} className="text-white text-decoration-none">Home</Link>
                        </Nav.Link>
                        {
                                user?.uid ?
                                    <>  
                                        <Nav.Link>
                                            {
                                                user.email
                                            }
                                        </Nav.Link>

                                        <Nav.Link>
                                            <Link onClick={handleLogout} className='text-light text-decoration-none'>logout</Link>
                                        </Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link>
                                            <Link to={'/register'} className="text-white text-decoration-none">Register</Link>
                                        </Nav.Link>

                                        <Nav.Link>
                                            <Link to={'/login'} className="text-white text-decoration-none">Login</Link>
                                        </Nav.Link>
                                    </>
                            }

                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSideBar></LeftSideBar>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;