import React from 'react';
import styled from 'styled-components';
import CardServico from '../CardServico/cardservico'

const Teste = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Carrossel = styled.div`
    border: 1px solid red;
    width: 100%;
`

class HomePage extends React.Component {
    render() {
        return(
            <Teste>
                <div>
                    <p>Texto</p>
                </div>
                <Carrossel>
                    Carrossel
                </Carrossel>
                <div>
                    <CardServico />
                </div>
            </Teste>
        );
    };
};

export default HomePage;