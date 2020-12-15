import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Hunter from './components/Hunter';
import Sherif from './components/Sherif';
import Bounty from './components/Bounty';
import SignIn from './components/sign/SignIn'
import SignUp from './components/sign/SignUp'

import './App.css';
import HuntList from './components/HuntList';
import BountyList from './components/BountyList';

function App() {
	const [bandits, listBandits] = useState('');
	const [loaded, isLoaded] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:3033/bandits`)
			.then((res) => {
				listBandits(res.data);
				isLoaded(true);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	}, []);
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/hunter'>
					{loaded && <Hunter bandits={bandits} />}
					</Route>
				<Route path='/huntlist'>
					{loaded && <HuntList bandits={bandits} />}
				</Route>
				<Route path='/sherif'>
					<Sherif />
				</Route>
				<Route path='/bountylist'>
					{loaded && <BountyList bandits={bandits} />}
				</Route>
				<Route path='/bounty'>
					<Bounty />
				</Route>
				<Route path='/signin'>
					<SignIn />
				</Route>
				<Route path='/signup'>
					<SignUp />
				</Route>
			</Router>
		</div>
	);
}

export default App;
