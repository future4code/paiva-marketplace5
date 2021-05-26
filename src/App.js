import React from 'react'

import { AppContainer } from './components/AppContainer'
import {FiltroOrdernar} from './components/FiltroOrdenar/FiltroOrdenar'
import Header from './components/Header';


class App extends React.Component {
	render(){
	return (

        <AppContainer />
		<FiltroOrdernar/>
        <Header />
		

	)
}
}

export default App
