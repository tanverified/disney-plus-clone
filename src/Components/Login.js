import React from 'react'
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET THE DISNEY BUNDLE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis aperiam vitae nam fugiat.
                </Description>
                <CTAlogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: realative;
    height: calc(100vh-70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        position: absolute;
        content: "";
        top:0;
        bottom: 0;    
        left:0;
        right:0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat:no-repeat;
        opacity: 0.7;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
`
const CTAlogoOne = styled.img`
    
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    text-align: center;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px; 
    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTAlogoTwo = styled.img`
    width:90%; 
    margin-top : 10px;
`

 