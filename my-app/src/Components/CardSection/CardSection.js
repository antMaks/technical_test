import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';

const CardContainer = styled.section`
width: 100%;
height: auto;
min-height: 100vh;
margin: 0 auto;
border: 1px solid black;
padding: 84px 17px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
justify-content: center
`


const CardSection = () => {
    return (
        <>
           <CardContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

           </CardContainer>
        </>
    )
}
 

export default CardSection


