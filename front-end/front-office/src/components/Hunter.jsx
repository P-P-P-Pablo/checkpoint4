import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import BanditCard from './BanditCard';
import Navbar from './navbar/HuntBar';

export default function Hunter(props) {
	const bandits = props.bandits;
	let [currentBandit, setCurrentBandit] = useState('');
	let currentID = currentBandit.id - 1;

	useEffect(() => {
		setCurrentBandit(bandits ? bandits[0] : '');
	}, [bandits]);

	const handleNext = (e) => {
		e.preventDefault();
		currentID + 1 < bandits.length
			? setCurrentBandit(bandits[currentID + 1])
			: setCurrentBandit(bandits[0]);
	};
	const handlePrev = (e) => {
		e.preventDefault();
		currentID - 1 > 0
			? setCurrentBandit(bandits[currentID - 1])
			: setCurrentBandit(bandits[bandits.length - 1]);
	};

	const startHunt=()=>{
		console.log(currentBandit);
		Axios.put(`localhost:3033/hunters/mybandits/6/chasse/${currentBandit.id}`)
	}

	return (
		<>
			<h1>Hunter</h1>
			<h2>Welcome to hunter page</h2>
			<Navbar />
			{currentBandit ? <BanditCard bandit={currentBandit} /> : ''}
			<button onClick={handlePrev}>precedent</button>
			<button onClick={startHunt}>Start the hunt !</button>
			<button onClick={handleNext}>suivant</button>
		</>
	);
}
