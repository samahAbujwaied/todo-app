import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
function Header(props) {
    return (<>

  
        <div >
            <Navbar bg="danger" variant="light" sticky="top" style={{ height: '100px' }}>
                <Container>
                    <Navbar.Brand href="/" style={{ textDecoration: "none"}}><h4>📝 📝 To Do List  📝 📝</h4
                    ></Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link variant="contained" color="secondary"
                            href='/settings' style={{ textDecoration: "none"}}> <h5>Setting</h5> </Nav.Link >
                    </Nav>
                </Container>
            </Navbar>

        </div>


    </>)


}

export default Header;