import { Paper } from '@mui/material';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
// import Button from '@mui/material/Button';
// import EmailIcon from '@mui/icons-material/Email';
import Button from 'react-bootstrap/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

// let theme = createTheme({
//     // Theme customization goes here as usual, including tonalOffset and/or
//     // contrastThreshold as the augmentColor() function relies on these
//   });
//   theme = createTheme(theme, {
//     // Custom colors created with augmentColor go here
//     palette: {
//       elecBlue: theme.palette.augmentColor({
//         color: {
//           main: '#150057',
//         },
//         name: 'elecBlue',
//       }),
//     },
//   });

function LoginCard() {
  const navigate = useNavigate()
  const [rollNo,setRollNo] = useState("");
  const handleChange = (evt)=>{
      setRollNo(()=> evt.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${rollNo}`)
  }
  return (
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',height:'60vh'}}>
        <Paper elevation={6}>
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>Attendance Portal</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            {/* Login using your institute mail ID to proceed.  */}
            Enter your institute Roll Number to proceed.
            </Card.Text>
            <Container style={{display:'flex',justifyContent:'center'}}>
            {/* <ThemeProvider theme={theme}> */}
            {/* <Button onClick={() => navigate('/user')} variant="contained" startIcon={<EmailIcon />}>
                Login Using GMail
            </Button> */}
            {/* </ThemeProvider> */}
            <Form onSubmit={handleSubmit}>
              <Form.Control type='number' name='rollnumber' placeholder='Roll No.' onChange={handleChange} value={rollNo}></Form.Control>
              <Button style={{marginTop:10}} variant='primary'type='submit' >Submit</Button>
            </Form>
            </Container>
        </Card.Body>
        </Card>
        </Paper>
    </Container>
  );
}

export default LoginCard;