import { useState,useEffect } from 'react'
import FooterUserDisplay from './navbarbs'
import HomeNavbar from './navbarhome'
import LoginCard from './Logincard'
//col-6 offset-3 ka use karna center karne le liye apne data display div ko like yelpcamp
function Homepage() {
  return (
    <>
        <HomeNavbar></HomeNavbar>
        <LoginCard></LoginCard>
        <FooterUserDisplay></FooterUserDisplay>
    </>
  )
}

export default Homepage
