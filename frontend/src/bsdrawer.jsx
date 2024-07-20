import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { Navigate, useNavigate} from 'react-router-dom';

function BSDrawer({rollNo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <>
      <Button variant="light" style={{backgroundColor:'#001855',color:'white',border:'none'}} onClick={handleShow}>
        Courses
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{backgroundColor:'#001855'}}>
          <Offcanvas.Title style={{color:'white'}}>Semester III</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'#001855',color:'white'}}>
            <Stack gap={2}>
                <div className="p-2"><a href={`/user/${rollNo}/ma201`} style={{color:'white'}}>MA-201</a></div>
                <div className="p-2"><a href={`/user/${rollNo}/me101`} style={{color:'white'}}>ME-101</a></div>
                <div className="p-2"><a href={`/user/${rollNo}/eo201`} style={{color:'white'}}>EO-201</a></div>
                <div className="p-2"><a href={`/user/${rollNo}/ee221`} style={{color:'white'}}>EE-221</a></div>
                <div className="p-2"><a href={`/user/${rollNo}/ee261`} style={{color:'white'}}>EE-261</a></div>
                <div className="p-2"><a href={`/user/${rollNo}/h104`} style={{color:'white'}}>H-104</a></div>
            </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BSDrawer;

