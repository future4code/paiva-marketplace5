import React, { Component } from 'react';
import styled from 'styled-components';
import Face from './img/face.png';
import Insta from './img/insta.png';
import Twitter from './img/tweet.png';
import Whats from './img/whats.png';
import Logo from './img/labeninjas2.png';


const ColorFooter = styled.div`
    background-color: #7763BF;     
    min-height: auto;     
    width: 100%; 
    display: flex;
    justify-content: center;
    overflow: hidden;
`

const FooterContainer
 = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100%;
    margin-bottom: 30px;
`

const FooterImg = styled.div`
    width: 150px;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoFooter = styled.img`
    width: 180px;
`
const DivIcons = styled.div`
    display: flex;
`
const Icons = styled.img`
    width: 45px;
    display: flex;
    margin-right: 1vw;
`

const PagesContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: auto;
    height: auto;
    align-items: stretch;
`
const ButtonPages = styled.button`
    font-size: 15px;
    text-align: left;
    border: none;
    background-color: transparent;
    outline: none;
    color: white;
    opacity: 1;
    margin-top: 1px;
    margin-bottom: 1px;
    :hover {
        opacity: .8;
        cursor: pointer;
    }
`
const CreditsColor = styled.div`
    background-color: #372365;
    height: 33px;
    width: 100%;
    `

const CreditsContainer = styled.div`    
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    justify-content: center;
    height: 33px;
`
const CreditsText = styled.div`
    font-size: 12px;
`

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <ColorFooter>
                    
                    <FooterContainer>
                        
                        <PagesContainer>
                                <ButtonPages>Home</ButtonPages>
                                <ButtonPages>Sobre nós</ButtonPages>
                                <ButtonPages>Onde Estamos</ButtonPages>
                            </PagesContainer>

                        <LogoFooter src={Logo} />
                        
                        <FooterImg>
                            <h6>Redes Sociais</h6>
                            <DivIcons>
                                <Icons src={Insta} />
                                <Icons src={Face} />
                                <Icons src={Twitter} />
                                <Icons src={Whats} />
                            </DivIcons>
                        </FooterImg>                       
                    </FooterContainer>
                
                </ColorFooter>
                <CreditsColor>
                    <CreditsContainer>
                        <CreditsText>
                            Desenvolvido por Bruno, Carlos, Felipe, Silvio, Therge.
                        </CreditsText>
                    </CreditsContainer>
                </CreditsColor>
            </div>
        )
    }
}

