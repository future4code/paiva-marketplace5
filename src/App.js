import React from 'react'
// import { AppContainer } from './components/AppContainer'
import FiltroOrdenar from './components/FiltroOrdenar/FiltroOrdenar'
import Filtros from './components/Filtros/Filtros';
import Header from './components/Header';
import Footer from './components/Footer';




class App extends React.Component {
	render(){
	return (
 	<div>
        {/* <AppContainer /> */}
		{/* <FiltroOrdenar/> */}
        {<Header />}
		{<Footer />}
		{/*<Filtros/>*/}
	</div>	

	)
}
}

export default App
