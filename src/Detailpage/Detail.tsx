import React from 'react'
import Header from '../Block/Header'
import { styled } from 'styled-components'
const Detail = () => {
  return (
    <div>
     <Container>
<Header/>
<Details>
 <Wrapper>
    <Left>
    <Image></Image>
    <Content></Content>
  </Left>
  <Right></Right> 
 </Wrapper>
</Details>
     </Container>
    </div>
  )
}

export default Detail
const Content = styled.div`
height: 100px;
width: 100%;
background-color: yellow;
`
const Image = styled.div`
height: 700px;
width: 70%;
background-color: red;
`
const Left = styled.div`
min-height: fit-content;
width: 70%;
background-color: red;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

`
const Right = styled.div`
height: 700px;
width: 30%;
background-color: green;
`
const Details = styled.div`
min-height: fit-content;
width: 100%;
background-color: black;
padding-top: 40px;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
min-height: fit-content;
width: 92%;
display: flex;
/* align-items: center; */
flex-direction: row;
`
const Container = styled.div`

`