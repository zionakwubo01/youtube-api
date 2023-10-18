import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { searchData, getSearchedVideo } from '../API/Api';

const Carddisplay = () => {
  const [state, setState] = useState<Array<{}>>([]);

let get = localStorage.getItem("data")

  useEffect(() => {
    getSearchedVideo(get).then((res) => {
      setState(res?.items)
      console.log("res: ",res)
    })
  }, [])
console.log(state)
  console.log("state: ", state)
  return (
    <div>
      <Container> 
    {
      state?.map((props: any)=>(
        <Card props={props}/>
      ))
    }
      </Container>
    </div>
  )
}

export default Carddisplay

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap:wrap;
gap: 10px;
`