import React from 'react'
// import { AppContainer } from './components/AppContainer'
import FiltroOrdenar from './components/FiltroOrdenar/FiltroOrdenar'
import Filtros from './components/Filtros/Filtros';
import Header from './components/Header';
import Footer from './components/Footer';
import Cadastro from './components/Cadastro/cadastro'
import Carrinho from './components/Carrinho/carrinho'
import CardServico from './components/CardServico/cardservico'


class App extends React.Component {
	render(){
	return (
 	<div>
		<Header />
		<hr/>
        <Cadastro/>
			
		{/* <CardServico/> */}
		
		{/* <FiltroOrdenar/> */}
		
        <Filtros/>
		<hr/>
		{/* <Carrinho/> */}
		
		<Footer />
	</div>

	)
}
}

export default App
