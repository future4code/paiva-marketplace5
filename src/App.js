import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ServicePage from './components/ServicePage/ServicePage';

const AppContainer = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: 1fr 8fr 1fr;
`

const AccessContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

class App extends React.Component {
	state = {
		paginaAtual: "home-page"
	}

	renderizaMainContainer = () => {
		switch ( this.state.paginaAtual ) {
			case "home-page":
				return <HomePage />;
			case "service-page":
				return (
					<ServicePage />
					);
			default:
				return;
		}
	}

	mudaParaHome = () => {
		this.setState({ paginaAtual: "home-page"});
	}

	mudaParaService = () => {
		this.setState({ paginaAtual: "service-page"});
	}

	render() {
		return (
			<AppContainer>
				{/* <FiltroOrdenar/> */}
				<Header 
					homePage={this.mudaParaHome}
					servicePage={this.mudaParaService}
				/>
				<br />
				{this.renderizaMainContainer()}
				{/* <Filtros/> */}
				<div>
					{/* <Footer /> */}footer
				</div>
			</AppContainer>

		)
	}
}

export default App
