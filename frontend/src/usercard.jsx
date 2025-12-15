import { Paper } from '@mui/material';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useState,useEffect } from 'react';

function UserCard({rollno}) {
  const [backendData,setBackendData] = useState(null);
  useEffect(()=>{
    fetch(`https://attendanceportalbackend.onrender.com/user/${rollno}`).then(
      res=> res.json()
    ).then(
      data=> setBackendData(data)
    )
  },[])
  const name = backendData?.student?.name;
  return (
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>
        <Paper elevation={6}>
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>Welcome! {name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            Choose the course in which you wish to check your attendance. 
            </Card.Text>
        </Card.Body>
        </Card>
        </Paper>
    </Container>
  );
}

export default UserCard;
