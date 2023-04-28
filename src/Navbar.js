import {React,useEffect,useState} from 'react'
import './Navbar.css'

function Navbar() {
    const [show,setShow]=useState(false)

    useEffect(()=>{
 window.addEventListener('scroll',()=>{
    if(window.scrollY>450){
        setShow(true)
    }
    else{
        setShow(false)
    }
 })
    },[])
  return (
    <div className={`nav ${show && 'navBlack'}`}>
        <img 
        style={{width:'180px'}}
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        />
    </div>
  )
}

export default Navbar