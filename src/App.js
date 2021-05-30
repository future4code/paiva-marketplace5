import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/home'


import styled from 'styled-components';

const DivPrincipal = styled.div`
	padding:2rem;
`

class App extends React.Component {
	state = {
		paginacao: 'servicos'
	}

	handlePagina = (pagina) => {
		this.setState({paginacao: pagina})
	}

	render(){
	return (
 	<div>

		<Header 
		someFunction={this.handleFunction}
		btnPagina = {this.handlePagina}
		/>
		<DivPrincipal>
			<Home
			pagina = {this.state.paginacao}
			/>
		</DivPrincipal>



		<Footer />
	</div>

	)
}
}

export default App
