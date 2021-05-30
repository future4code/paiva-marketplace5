import React from 'react'
// import { AppContainer } from './components/AppContainer'
import FiltroOrdenar from './components/FiltroOrdenar/FiltroOrdenar'
import Filtros from './components/Filtros/Filtros';
import Header from './components/Header';
import Footer from './components/Footer';
import Cadastro from './components/Cadastro/cadastro'
import Carrinho from './components/Carrinho/carrinho'
import CardServico from './components/CardServico/cardservico'
import Home from './components/home'


class App extends React.Component {
	state = {
		paginacao: 'servicos'
	}

	handlePagina = (pagina) => {
		this.setState({paginacao: pagina})
		alert(this.state.paginacao)
	}

	render(){
	return (
 	<div>
		<Header 
		someFunction={this.handleFunction}
		btnPagina = {this.handlePagina}
		/>
		<Home
		pagina = {this.state.paginacao}
		/>

		<Footer />
	</div>

	)
}
}

export default App
