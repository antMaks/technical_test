import React from 'react';
// import Header from '../Header/Header';
import styled from 'styled-components'


const ContainerCard = styled.div`
width: 100%;
max-width: 300px;
margin: 17px 10px;
border: 1px solid black;

`

const HeaderCard = styled.div`
width: 100%;
max-width: 300px;
border: 1px solid black;
margin: 17px 0;
`

const BtnBuy = styled.button`
    color:red;
    padding: 23px 125px;
`

const Title = styled.p`
    font-size:16px;
    color:black;
    text-align:center;
`

const MainCard = styled.div`
border: 1px solid black;
width: 100%;
margin: 0 auto;
height: auto;
min-height: 220px;
`


const Paragraph = styled.p`
font-size: 14px;
color: black;
width: 100%;
max-width: 260px;
padding: 15px;
 `

 const PargraphDiv = styled.div`
    width:100%;
    max-width:280px;
    padding:0 20px;
 `

 const FooterCard = styled.div`
    width: 100%;
    height: auto;
    min-height: 60px;
 `

 

const Card = () => {
    return (
        <>
        <ContainerCard>
        <HeaderCard>
            <Title>hello</Title>
            </HeaderCard>
            <MainCard>
            <PargraphDiv>
                <Paragraph>
                    hello i tell you about o
                    ur live that life beuti
                    fu adskdjhakshdakjdak
                    jsdhajkshdkajsh
                    dkajshdkajshdkajshdkajsh
                    dkajshdKSAFH
                    GSADKHSKDFHSKDFHSALKDFH
                    SKDlsdasdasd
                    sadasdasd
                    asdaldalsdkals 
                    </Paragraph>
                    </PargraphDiv >
            </MainCard>
            <FooterCard>
           
            <BtnBuy>Buy</BtnBuy>

            </FooterCard>
            </ContainerCard>
       </>
    )
}
 

export default Card


