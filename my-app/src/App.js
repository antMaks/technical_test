import React from 'react';
import Header from './Components/Header/Header';
import styled, {css} from 'styled-components'
import CardSection from './Components/CardSection/CardSection';


const Container = styled.div`
    width:100%;
    height:120vh;
    max-width:1200px;
    margin: 0 auto;
`

const  App = () =>  {
  return (
    <Container>
    {/* <div className="App"> */}
    <Header/>
    {/* </div> */}
    <CardSection/>
    </Container>
  );
}

export default App;
