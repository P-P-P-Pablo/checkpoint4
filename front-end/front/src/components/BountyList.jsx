import React, { useEffect, useState } from 'react';
import BanditCard from './BanditCard';
import Navbar from './navbar/SherifBar';
import '../styles/Sherif.css';

export default function BountyList(props) {
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

	return (
		<div className='sherif'>
			<h1>Sherif</h1>
			<h2>Welcome to bounty list page</h2>
			<Navbar />
			<div className="mybandits">
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
			<button className='button left' onClick={handlePrev}>
				precedent
			</button>
			<button className='button right' onClick={handleNext}>
				suivant
			</button>
		</div>
	);
}
