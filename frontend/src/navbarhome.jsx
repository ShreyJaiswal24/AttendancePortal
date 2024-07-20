import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TemporaryDrawer from './drawer';
import BSDrawer from './bsdrawer';
import { Paper } from '@mui/material';

export default function HomeNavbar() {
  return (
    <Paper elevation={6}>
        <Navbar collapseOnSelect expand="lg" variant='light' style={{backgroundColor:'#001855'}} data-bs-theme="dark">
        <Container style={{display:'flex',flexDirection:'column'}}> 
            <Container style={{display:'flex',justifyContent:'center',paddingBottom:0,marginBottom:0}}>
                <Navbar.Brand style={{fontSize:50}}>DEPARTMENT OF ELECTRICAL ENGINEERING</Navbar.Brand>
            </Container>
            <Container style={{display:'flex',justifyContent:'center'}}>
                <Navbar.Brand>INDIAN INSTITUTE OF TECHNOLOGY - BANARAS HINDU UNIVERSITY</Navbar.Brand>
            </Container>
        </Container>
        </Navbar>
    </Paper>
  );
}