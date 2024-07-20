import { useState,useEffect } from 'react'
import Homepage from './homepage'
import UserMainPage from './usermainpage'
import UserAttendancePage from './userattendancepage'
import AttendanceUpdatePage from './attendanceupdatepage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

//col-6 offset-3 ka use karna center karne le liye apne data display div ko like yelpcamp
function App() {

  // const [backendData,setBackendData] = useState([{}])
  // useEffect(()=>{
  //   fetch('/api').then(
  //     res => res.json()
  //   ).then(data =>  setBackendData(data)
  //   )
  // },[])
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/user/:rollNo' element={<UserMainPage></UserMainPage>}></Route>
        <Route path='/user/:rollNo/:course' element={<UserAttendancePage></UserAttendancePage>}></Route>
        <Route path='/admin/update' element={<AttendanceUpdatePage></AttendanceUpdatePage>}></Route>      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
