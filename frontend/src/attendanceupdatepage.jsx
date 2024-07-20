import { useState,useEffect } from 'react'
import AdminNavbar from './adminNavbar'
import UpdateTable from './updatetable'
import FooterUserDisplay from './navbarbs'
import { useParams } from 'react-router-dom'


function AttendanceUpdatePage() { 
  return (
    <>
        <AdminNavbar></AdminNavbar>
        <UpdateTable></UpdateTable>
        <FooterUserDisplay></FooterUserDisplay>
    </>
  )
}

export default AttendanceUpdatePage
