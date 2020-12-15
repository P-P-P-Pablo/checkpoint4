import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import BanditCard from './BanditCard';
import Navbar from './navbar/HuntBar';
import '../styles/Hunter.css';

export default function Hunter(props) {
	const myId = 6;
	const bandits = props.bandits.filter(
		(bandit) => bandit.status !== 'chasse' && bandit.status !== 'attrape'
	);
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

	const startHunt = () => {
		Axios.put(
			`http://localhost:3033/hunters/mybandits/${myId}/chasse/${currentBandit.id}`,
			currentBandit
		)
			.then((res) => {
				alert('hunt start confirmed');
				console.log(res);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	};

	return (
		<div className='hunter'>
			<h1>Hunter</h1>
			<h2>Welcome to hunter page</h2>
			<Navbar />
			{currentBandit ? <BanditCard bandit={currentBandit} /> : ''}
			<button className='button left' onClick={handlePrev}>
				precedent
			</button>
			<button className='button middle' onClick={startHunt}>
				Start the hunt !
			</button>
			<button className='button right' onClick={handleNext}>
				suivant
			</button>
		</div>
	);
}
