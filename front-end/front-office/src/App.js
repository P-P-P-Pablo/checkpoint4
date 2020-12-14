import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Hunter from './components/Hunter';
import Sherif from './components/Sherif';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Route exact path='/'>
					<Home/>
				</Route>
				<Route path='/about'>
					<About/>
				</Route>
				<Route path='/hunter'>
					<Hunter/>
				</Route>
				<Route path='/sherif'>
					<Sherif />
				</Route>
			</Router>
		</div>
	);
}

export default App;
