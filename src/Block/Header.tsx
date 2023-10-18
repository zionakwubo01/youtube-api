import React from 'react'
import styled from "styled-components"
import {FiMenu} from "react-icons/fi"
import logo from "../assets/download-removebg-preview.png"
import {FiSearch} from "react-icons/fi"
import {FiMic} from "react-icons/fi"
import {BsCameraVideo} from "react-icons/bs"
import {FiBell} from "react-icons/fi"
const Header = () => {
  return (
    <div>



<Container>
<Wrapper>
<Left>

<Menu>
<FiMenu/>
</Menu>
<Logo>
<img src={logo}/>
</Logo>
</Left>
<Middle>

<Input>
<input placeholder='search'/>
<Search>
<FiSearch/>
</Search>
</Input>

<Mic>
<FiMic/>
</Mic>

</Middle>
<Right>
<Icon>
  <BsCameraVideo/>
</Icon>
<Icon>
<FiBell/>
</Icon>
<Profile></Profile>
</Right>
</Wrapper>
</Container>
    </div>
  )
}

export default Header
const Icon = styled.div`
font-size: 25px;
`
const Profile = styled.div`
height: 45px;
border-radius: 50%;
width: 45px;
background-color: blue;
`
const Search = styled.div`
  height: 40px;
  width: 57px;
  /* background-color: #b1aeae; */
border-top-right-radius: 40px;
border-bottom-right-radius: 40px;
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 20px;


`
const Mic = styled.div`
border: 1px solid silver;
height: 40px;
width: 40px;
background-color: white;
border-radius: 50%;
color: black;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  background-color: #dcd9d9;
}
`
const Input = styled.div`
height: 68%;
width: 90%;
border-radius: 40px;
display: flex;
border: 0.5px solid black;
  align-items: center;
  justify-content: center;
  flex-direction: row;
input{
height: 90%;
width: 90%;
border: 0;
border-top-left-radius: 40px;
border-bottom-left-radius: 40px;
border: 0;
outline: 0;
padding-left: 20px;
background-color: lightgrey;
}
`
const Logo = styled.div`
height: 90%;
width: 130px;
object-fit: cover;
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`
const Menu = styled.div`
color: black;
font-size: 20px;
background-color: transparent;
height: 35px;
width: 35px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  background-color: lightgray;
  transition: all 350ms ease-in-out;
  cursor: pointer;
}
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
const Middle = styled.div`
  height: 90%;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  gap: 20px;


`

const Wrapper = styled.div`
  height: 60px;
width: 98%;
background-color: white;
display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`
const Container = styled.div`
height: 60px;
width: 100%;
background-color: white;
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: fixed;

`