import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Paper } from '@mui/material';

function FooterUserDisplay() {
  return (
    <>  
    <Paper elevation={6}>
        <Navbar fixed='bottom' variant='light' style={{backgroundColor:'#001855'}} data-bs-theme='dark'>
        <Container style={{justifyContent:'center'}}>
          <Navbar.Text>© Shrey Jaiswal,EEE'27,IIT-BHU</Navbar.Text>
          </Container>
        </Navbar>
      </Paper>
    </>
  );
}

export default FooterUserDisplay;