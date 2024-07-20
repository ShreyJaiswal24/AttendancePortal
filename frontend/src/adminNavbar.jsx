import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Paper } from '@mui/material';

export default function AdminNavbar() {
  return (
    <Paper elevation={6}>
        <Navbar collapseOnSelect expand="lg" variant='light' style={{backgroundColor:'#001855'}} data-bs-theme="dark">
        <Container >
            <Navbar.Brand href={'/'}>Attendance Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'#001855'}}/>
            <Navbar.Collapse id="responsive-navbar-nav"  style={{backgroundColor:'#001855'}}>
            <Container style={{justifyContent:'left',backgroundColor:'#001855'}} >
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


