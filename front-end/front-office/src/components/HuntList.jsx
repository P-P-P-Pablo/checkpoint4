import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import BanditCard from './BanditCard';
import Navbar from './navbar/HuntBar';

export default function HuntList(props) {
	const bandits = props.bandits;
	let [currentBandit, setCurrentBandit] = useState('');
	let currentID = currentBandit && currentBandit.id - 1;
	const [selected, setSelected] = useState('');

	useEffect(() => {
		setCurrentBandit(bandits ? bandits[0] : '');
	}, [bandits]);

	useEffect(() => {
		setSelected(currentBandit.id);
	}, [currentBandit, selected]);

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

	const handleChange = (e) => {
		e.preventDefault();

		setSelected(e.target.value);
		setCurrentBandit(bandits[e.target.value - 1]);
	};
	const endHunt=()=>{
		console.log(currentBandit);
		Axios.put(`localhost:3033/hunters/mybandits/6/attrape/${currentBandit.id}`)
	}

	return (
		<>
			<h1>Hunter</h1>
			<h2>Welcome to huntlist page</h2>
			<Navbar />
			<div style={{ display: 'flex', flexFlow: 'column nowrap', margin: 10 }}>
				{bandits.map((bandit) => {
					return (
						<label key={bandit.name} value={bandit.id}>
							<input
								key={bandit.name}
								type='radio'
								value={bandit.id}
								checked={bandit.id === selected}
								onChange={handleChange}
							/>
							{bandit.name}
						</label>
					);
				})}
			</div>
			{currentBandit ? <BanditCard bandit={currentBandit} /> : ''}
			<button onClick={handlePrev}>precedent</button>
			<button onClick={endHunt}>I catched him !</button>
			<button onClick={handleNext}>suivant</button>
		</>
	);
}
