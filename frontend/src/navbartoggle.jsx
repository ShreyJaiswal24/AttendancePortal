import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TemporaryDrawer from './drawer';
import BSDrawer from './bsdrawer';
import { Paper } from '@mui/material';

export default function UserNavbar({rollno}) {
  return (
    <Paper elevation={6}>
        <Navbar collapseOnSelect expand="lg" variant='light' style={{backgroundColor:'#001855'}} data-bs-theme="dark">
        <Container >
            <Navbar.Brand href={`/user/${rollno}`}>Attendance Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'#001855'}}/>
            <Navbar.Collapse id="responsive-navbar-nav"  style={{backgroundColor:'#001855'}}>
            <Container style={{justifyContent:'left',backgroundColor:'#001855'}} >
                <BSDrawer rollNo={rollno}></BSDrawer>
                </Container>
            <Nav>
                <Nav.Link eventKey={2} href="/">
                Logout
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </Paper>
  );
}


{/* <Container style={{justifyContent:'left',backgroundColor:'#001855'}} >
            <Nav className="me-auto" variant='light' style={{backgroundColor:'#001855'}} data-bs-theme='dark'>
                <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" style={{backgroundColor:'#001855'}}>EE-101</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{backgroundColor:'#001855'}}>EO-102</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" style={{backgroundColor:'#001855'}}>MA-203</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" style={{backgroundColor:'#001855'}}>MO-201</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" style={{backgroundColor:'#001855'}}>H-106</NavDropdown.Item>
                </NavDropdown>
            </Nav>
</Container> */}