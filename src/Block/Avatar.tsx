import {FC} from 'react'
import { styled } from 'styled-components'


interface iProps{
    props: any
}
const Avatar = () => {
  return (
    <div>
        <Container>

        </Container>
    </div>
  )
}

export default Avatar

const Container = styled.img`
height: 50px;
width: 50px;
background-color: red;
object-fit: contain;
border-radius: 50%;
`