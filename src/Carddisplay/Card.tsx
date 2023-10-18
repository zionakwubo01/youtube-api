import {FC, useState, useEffect} from 'react'
import styled from "styled-components"
import  vid from "../assets/webliumvideo.mp4"
import img from "../assets/appendage.jpg"
import { NavLink } from 'react-router-dom'
import Avatar from '../Block/Avatar'


interface iProps{
    props: any
}

const Card: FC<iProps> = ({props}) => {
   const [state, setstate] = useState()
  return (
    <div>
      <NavLink to="/detailpage" style={{textDecoration: "none", color: "none"}}>
      <Container>
<Image>
    <video src={props.id.videoId} playsInline autoPlay muted loop controls />
    <img src={props?.snippet.thumbnails.default.url} alt="img"/>
</Image>
<Content>
<Avatar/>
  <Text>
  <Name>zion akwubo</Name>
  <Title></Title>
  
    <Des>Lorem ipsum dolor, sit amet consectetur adipisicing 
       elit. Tenetur, labore! Est minus nobis iste at</Des>
    
  </Text>
        
</Content>
        </Container>
      </NavLink>
    </div>
  )
}

export default Card
const Text = styled.div`
min-height: fit-content;
width: 100%;
display: flex;
flex-direction: column;
`
const Title = styled.div`
font-weight: bold;
font-size: 14px;

`
const Des = styled.div`
    font-size: 14px;

`
const Name = styled.div`
    font-size: 17px;
    font-weight: bold;
`
const Content = styled.div`
min-height: fit-content;
width: 100%;
align-items: center;
display: flex;
flex-direction: row;
gap: 15px;
`
const Image = styled.div`
height: 200px;
width: 100%;
background-color: red;
border-radius: 20px;
position: relative;
video{
    height: 100%;
    width: 100%;
    object-fit: cover;
border-radius: 20px;
}
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
border-radius: 20px;
position: absolute;
top: 0;
right: 0;
&:hover{
    opacity: 0;
    transition: 450ms all ease-in-out;
}
}
`
const Container = styled.div`
min-height: fit-content;
width: 370px;
/* background-color: aliceblue; */
`