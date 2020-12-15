import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Hunter from './components/Hunter';
import Sherif from './components/Sherif';
import Bounty from './components/Bounty';
import SignIn from './components/sign/SignIn';
import SignUp from './components/sign/SignUp';
import PrivateRoute from './authentication/PrivateRoute';
import Authentication  from './authentication/authContext';

import './App.css';
import HuntList from './components/HuntList';
import BountyList from './components/BountyList';

const { ProvideAuth, AuthButton } = Authentication ;

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
		<ProvideAuth>
		<Router>
			<div className='App'>
			
				<Switch>
					<Navbar />
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<PrivateRoute path='/hunter'>
						{loaded && <Hunter bandits={bandits} />}
					</PrivateRoute>
					<PrivateRoute path='/huntlist'>
						{loaded && <HuntList bandits={bandits} />}
					</PrivateRoute>
					<PrivateRoute path='/sherif'>
						{loaded && <Sherif bandits={bandits} />}
					</PrivateRoute>
					<PrivateRoute path='/bountylist'>
						{loaded && <BountyList bandits={bandits} />}
					</PrivateRoute>
					<PrivateRoute path='/bounty'>
						<Bounty />
					</PrivateRoute>
					<Route path='/signin'>
						<SignIn />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
				</Switch>
			</div>
		</Router>
		</ProvideAuth>
	);
}

export default App;
