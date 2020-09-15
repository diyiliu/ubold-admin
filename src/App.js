import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Container from './components/Container';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<SideMenu />
				<Container />
			</Router>
		</div>
	);
}

export default App;
