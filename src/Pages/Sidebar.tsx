import React from 'react'
import { styled } from 'styled-components'
import Sideicon from "../navcomp/Sideicon"
import { AiFillHome } from "react-icons/ai";
import { BiScreenshot } from "react-icons/bi";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
const Sidebar = () => {
  return (
    <div>
        <Container>


<Sideicon icon={<AiFillHome/>} title='Home' />
<Sideicon icon={<BiScreenshot/>} title='shorts'/>
<Sideicon icon={<MdOutlineSubscriptions/>} title='subscribe'/>
<Sideicon icon={<MdOutlineVideoLibrary/>} title='library'/>

        </Container>
    </div>
  )
}

export default Sidebar

const Container = styled.div`
height: calc(100vh - 60px);
width: 70px;
background-color: white;
position: fixed;
bottom: 0;
display: flex;
align-items: center;
flex-direction: column;
`