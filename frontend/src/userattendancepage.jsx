import { useState,useEffect } from 'react'
import UserNavbar from './navbartoggle'
import AttendanceCard from './attendancecard'
import FooterUserDisplay from './navbarbs'
import { useParams } from 'react-router-dom'

function UserAttendancePage() { 
  const {rollNo,course}=useParams()
  const [backendData,setBackendData]=useState(null)
  useEffect(()=>{
    fetch(`https://attendanceportalbackend.onrender.com/user/${rollNo}/${course}`)
    .then(res=>res.json())
    .then(data=>setBackendData(data))
  },[])
  const subname = backendData?.name;
  const p = backendData?.present;
  const t=backendData?.total;
  return (
    <>
        <UserNavbar rollno={rollNo}></UserNavbar>
        <AttendanceCard subject={subname} p={p} t={t}></AttendanceCard>
        <FooterUserDisplay></FooterUserDisplay>
    </>
  )
}

export default UserAttendancePage
