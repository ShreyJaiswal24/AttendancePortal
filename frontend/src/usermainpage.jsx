import { useState,useEffect } from 'react'
import UserNavbar from './navbartoggle'
import UserCard from './usercard'
import FooterUserDisplay from './navbarbs'
import { useParams } from 'react-router-dom'


function UserMainPage() { 
  const {rollNo}=useParams();
  return (
    <>
        <UserNavbar rollno={rollNo}></UserNavbar>
        <UserCard rollno={rollNo}></UserCard>
        <FooterUserDisplay></FooterUserDisplay>
    </>
  )
}

export default UserMainPage
