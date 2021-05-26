import React from 'react'
// import { AppContainer } from './components/AppContainer'
import FiltroOrdenar from './components/FiltroOrdenar/FiltroOrdenar'
import Header from './components/Header';


class App extends React.Component {
	render(){
	return (
 	<div>
        {/* <AppContainer /> */}
		<FiltroOrdenar/>
        <Header />
	</div>	

	)
}
}

export default App
