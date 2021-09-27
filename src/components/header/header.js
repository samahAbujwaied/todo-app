import React,{useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import { LoginContext } from "../../context/auth";
function Header(props) {
    const { logout } = useContext(LoginContext);

    return (<>
        <div >
            <Navbar bg="danger" variant="light" sticky="top" style={{ height: '100px' }}>
                <Container>
                    <Nav.Link href="/" style={{ textDecoration: "none"}}><h4 style={{color:"white"}}>📝 📝 To Do List  📝 📝</h4
                    ></Nav.Link>
                    <Nav className="me-auto">
                        
                        <Nav.Link variant="contained" color="secondary"
                            href='/settings' style={{ textDecoration: "none"}}> <h5 style={{color:"white"}}>Setting</h5> </Nav.Link >
                    </Nav>
                    <Nav className="me-auto">
                        
                        <Nav.Link variant="contained" color="secondary"
                            href='/' style={{ textDecoration: "none"}}> <Button style={{marginLeft:"40rem"}} onClick={logout}>Logout</Button> </Nav.Link >
                
                    </Nav>
                </Container>
            </Navbar>

        </div>


    </>)


}

export default Header;