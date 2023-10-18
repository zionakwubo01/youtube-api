import React from 'react'
import { styled } from 'styled-components'
import NavComp from '../navcomp/Navcomp'
import Navslide from '../navcomp/Navslide'
import Carddisplay from '../Carddisplay/Carddisplay'

const Hero = () => {
  return (
    <div>
      <Container>
        <Navslide/>

        <Carddisplay/>
      </Container>
    </div>
  )
}

export default Hero

const Container = styled.div`
height: calc(100vh - 60px);
width: calc(100vw - 70px);
/* background-color: blue; */
margin-top: 60px;
display: flex;
gap: 10px;
flex-direction: column;
`