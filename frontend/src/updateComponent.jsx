import Container from 'react-bootstrap/esm/Container';
import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Paper } from '@mui/material';
import axios from "axios"

function UpdateComponent({rollno}){
    const [backendData,setBackendData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3000/user/${rollno}`).then(
      res=> res.json()
    ).then(
      data=> setBackendData(()=> data)
    )
    },[])
    const name  = backendData?.student?.name;
    const p = [];
    const t=[];
    backendData?.courses?.map((item,index)=>{
        p.push(item.present)
        t.push(item.total)
    })
    // const [present,setPresent]=useState(0);
    // const [absent,setAbsent] = useState(0);
    // const updatePresent = () =>{

    // }
    // const updateAbsent = () =>{
      
    // }
    const coursecode = ['ma201','me101','eo201','ee221','ee261','h104']
    const handleAbsent = (index)=>{
      axios.put(`http://localhost:3000/update/${rollno}/${coursecode[index]}/absent`)
      //.then((response)=>(setBackendData(()=>(response))))
      .then((response)=>(console.log('request successfull')))
      console.log({rollno,index})
    }
    const handlePresent = (index)=>{
      axios.put(`http://localhost:3000/update/${rollno}/${coursecode[index]}/present`)
      //.then((response)=>(setBackendData(()=>(response))))
      .then((response)=>(console.log('request successfull')))
      console.log({rollno,index})
    }
    return (
        <>
        <tbody>
        <tr>
            <td>{rollno}</td>
            <td>{name}</td>
            {p.map((no,index)=>(
                <td key={index}>
                  <Button onClick={()=>handlePresent(index)} style={{backgroundColor:"green",color:"white",marginBottom:5}}>{no}</Button>
                  <Button onClick={()=>handleAbsent(index)} style={{color:"white",backgroundColor:"red"}}>{t[index]-no}</Button>
                </td>
            ))}
        </tr>
        </tbody>
        </>
    )
}

export default UpdateComponent;