import React from 'react'
import { AppContainer } from './components/AppContainer'
import {FiltroOrdernar} from './components/FiltroOrdenar/FiltroOrdenar'

class App extends React.Component {
	render(){
	return (
        <AppContainer />
		<FiltroOrdernar/>
	)
}
}

export default App
