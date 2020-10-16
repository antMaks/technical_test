import React from 'react';
import Header from './Components/Header/Header';
import styled, {css} from 'styled-components'
import CardSection from './Components/CardSection/CardSection';
import CardPage from "./Pages/CardPage"
import Footer from "./Components/Footer/Footer"

const Container = styled.div`
    width:100%;
    height:120vh;
    max-width:1200px;
    margin: 0 auto;
`

const  App = () =>  {
const things = [
    { title: 'chiken', text:'chiken is good and yummy dont forgot about your life', price: "300grn", id:1 },
    { title: 'Cow', text:'Cow is good and yummy dont forgot about your life', price: "600grn", id:2 },
    { title: 'Dog', text:'Dog is good and yummy dont forgot about your life', price: "500grn", id: 3 }
]

  return (
    <Container>
    {/* <div className="App"> */}
    <Header/>
    <CardPage/>
    {/* </div> */}
    <CardSection things={things} />
    <Footer/>
    </Container>
  );
}

export default App;
