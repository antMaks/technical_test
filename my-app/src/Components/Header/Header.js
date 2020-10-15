import React  from 'react';
import styled, {css} from 'styled-components'
import Button from '../Button/Button';

import {

    Link
  } from "react-router-dom";

const HeaderContainer = styled.header`
    width:100%;
    padding:15px;
    max-width:1200px;
    margin: 0 auto;
    display:flex;
    justify-content: end;
    border: 1px solid black;
    margin: 34px 0px;
`

const Header = () => {
    return (
        
        <HeaderContainer>
        <Button><Link to="/CardSection">Cart</Link></Button>
        </HeaderContainer>
       
       
    )
}
 

export default Header


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
