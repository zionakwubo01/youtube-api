
import { styled } from "styled-components";
import Sidecontent from "../Pages/Sidecontent"
import Sidebar from "./Sidebar";

import {useEffect, useState} from "react"

const HomeScreen = () => {

  

  return (
    <div>

   
    <Sidecontent />
  
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
`
