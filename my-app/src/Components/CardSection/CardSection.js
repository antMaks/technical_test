import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';

const CardContainer = styled.section`
width: 100%;
height: auto;
margin: 0 auto;
border: 1px solid black;
padding: 84px 17px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
justify-content: center;
padding: 55px calc(50% - 585px);
`


const CardSection = (props) => {
    console.log(props);
    return (
        <>
           <CardContainer>
           { props.things.map((thing) => {
               return <Card thing={thing} key={thing.id}/>
           }) }

           </CardContainer>
        </>
    )
}
 

export default CardSection


