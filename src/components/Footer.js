import React from 'react';
import styled from "styled-components";
import FaceIcon from "./img/face.png"
import InstaIcon from "./img/insta.png"
import TwitterIcon from "./img/tweet.png"


const FooterContainer = styled.div`
margin-top: 90vh;
background-color: #7763BF;
display: flex;
height: 18vh;
justify-content: space-around;
`

const RedesSociais = styled.img`
height: 70px;
width: 70px;
margin-top: 10vh;
padding-right: 1vw;
margin-right: 1vw;
`
     
export default class Footer extends React.Component {
      render() {
      
            return (
                  
                  <FooterContainer>
                        <h5>Sobre nós</h5>
                        <h5>Endereço</h5>
                              <a target="_blank" href="https://www.facebook.com"><RedesSociais src={FaceIcon} alt="Facebook" /></a>
                              <a target="_blank" href="https://www.instagram.com"><RedesSociais src={InstaIcon} alt="Instagram"/></a>
                              <a target="_blank" href="https://www.twitter.com"><RedesSociais src={TwitterIcon} alt="Twitter"/></a>
                  </FooterContainer> 
                  
            );
      }
}