import React  from 'react';
import styled, {css} from 'styled-components'
import Button from '../Button/Button';

import {
    Route,
    Router,
    BrowserRouter,
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
`

const Header = () => {
    return (
        
        <HeaderContainer>
         <BrowserRouter>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CardPage">Cart</Link></li>
        </ul>
        </BrowserRouter>
       
        </HeaderContainer>
       
       
    )
}
 

export default Header


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
