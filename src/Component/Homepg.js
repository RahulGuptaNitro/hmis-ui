import React, { useState } from 'react'
import "../hmis.jpg"
import { Outlet } from 'react-router-dom';
import { Bgimg, Button, Main, Navbar, Navbutton, Navlogo } from '../EmotionCss/CommonEmotion';
import Sidebar from './Sidebar'
import { MenuRounded } from '@mui/icons-material';
import bgimg from '../hmis.jpg';


export default function Homepg() {
  
  const [show,setShow]=useState(false)
  const [buttoncontent,setButtoncontent]=useState(0)
  const [ishomepg,setIsHomePg]=useState(true)


  return (
    <>
      <Navbar>
        <Navbutton onClick={()=>{setShow(!show)}}><MenuRounded/></Navbutton>
        <Navlogo>HMIS</Navlogo>
      </Navbar>
      {show && <Sidebar show={show} setShow={setShow}/>}
      {<Outlet/> || <Main>
        <Bgimg src={bgimg}/>
      </Main>}
    </>
  )
}
