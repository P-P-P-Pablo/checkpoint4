import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BanditCard from './BanditCard';

export default function Hunter() {
	let [bandits, listBandits] = useState('');
	let [currentBandit, setCurrentBandit] = useState('');
	let currentID = currentBandit.id - 1;

	const getBandits = () => {
		axios
			.get(`http://localhost:3033/bandits`)
			.then((res) => {
				listBandits(res.data);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	};

	useEffect(() => {
		getBandits();
	}, []);

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

	return (
		<>
			<h1>Hunter</h1>
			<h2>Welcome to hunter page</h2>
			{currentBandit ? <BanditCard bandit={currentBandit} /> : ''}
			<button onClick={handlePrev}>precedent</button>
			<button onClick={handleNext}>suivant</button>
		</>
	);
}
