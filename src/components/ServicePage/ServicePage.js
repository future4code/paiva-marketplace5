import React from  'react';
import styled from 'styled-components';

const Teste = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

class ServicePage extends React.Component {
    render () {
        return(
            <Teste>
                entrei na ServicePage
            </Teste>
        );
    };
};

export default ServicePage;