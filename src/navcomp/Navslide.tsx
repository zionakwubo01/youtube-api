import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import NavComp from './Navcomp'
import { searchData , getSearchedVideo} from '../API/Api'

const Navslide = () => {
  const [click , setclick] = useState<Array<{}>>([])
 
  return (
    <div>
        <Container>
<NavComp bg="black" text='all'
onClick={()=>{
  localStorage.setItem("data", JSON.stringify("all"))
  window.location.reload()
}}

/>
<NavComp text="Recently uploaded" 
onClick={()=>{
localStorage.setItem("data", JSON.stringify("Recently uploaded"))
// console.log("Recently uploaded")
window.location.reload()

}}
/>
<NavComp text="News"
onClick={()=>{
  localStorage.setItem("data", JSON.stringify("News"))
  window.location.reload()

  }}
/>
<NavComp text="Live"
onClick={()=>{
  localStorage.setItem("data", JSON.stringify("Live"))
  window.location.reload()

  }}

/>
<NavComp text="Debates"
onClick={()=>{
  localStorage.setItem("data", JSON.stringify("Debates"))
  window.location.reload()

  }}
/>
<NavComp text="Mixes"
onClick={()=>{
  localStorage.setItem("data", JSON.stringify("Mixes"))
  window.location.reload()

  }}
/>
<NavComp text="WWE Smackdown"
onClick={()=>{
  localStorage.setItem("data", JSON.stringify("News"))
  window.location.reload()
  
  }}
/>
        </Container>
    </div>
  )
}

export default Navslide

const Container = styled.div`
display: flex;
align-items: center;
`;