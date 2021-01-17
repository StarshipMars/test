import React from 'react'
import styled from 'styled-components'
import { CitySearch } from './components/CitySearch'
import { ChartBar } from './components/ChartBar'

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   box-shadow: ${(props)=> props.shadow};
   width: 1000px;
   height: 100%;
   margin: 0 auto;
   border-radius: 7px;
`


function App() {

  return (
    <Wrapper shadow="0px 0px 8px 5px #e3e3e3">
       <ChartBar/>
       <CitySearch/>
    </Wrapper>
  );
}

export default App;
