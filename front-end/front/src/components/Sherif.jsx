import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import BanditCard from './BanditCard';
import Navbar from './navbar/SherifBar';
import '../styles/Sherif.css';

export default function Sherif(props) {
	const myId = 6;
	const [bandits, listBandits] = useState(props.bandits);
	const [myBandits, listMyBandits] = useState([]);
	const [loaded, isLoaded] = useState(false);
	let [currentBandit, setCurrentBandit] = useState('');
	let [currentID, setCurrentId] = useState(0);
	const [selected, setSelected] = useState('');

	useEffect(() => {
		!loaded &&
			Axios.get('http://localhost:3033/sherifs/mybandits/' + myId)
				.then((res) => {
					listMyBandits(res.data);
					isLoaded(true);
				})
				.catch((err) => {
					// Handle Error Here
					console.error(err);
				});
	});

	const majList = (newList) => {
		if (newList.length > 0 && loaded) {
			listBandits(newList);
		}
	};

	useEffect(() => {
		majList(myBandits);
	}, [myBandits]);

	useEffect(() => {
		setCurrentBandit(bandits ? bandits[currentID] : '');
	}, [bandits, currentID]);

	useEffect(() => {
		setSelected(currentID);
	}, [currentID, selected]);

	const handleNext = (e) => {
		e.preventDefault();

		currentID + 1 < bandits.length
			? setCurrentId(currentID + 1)
			: setCurrentId(0);
	};
	const handlePrev = (e) => {
		e.preventDefault();

		currentID - 1 >= 0
			? setCurrentId(currentID - 1)
			: setCurrentId(bandits.length - 1);
	};

	const handleChange = (e) => {
		e.preventDefault();

		setSelected(e.target.value);
		setCurrentBandit(bandits[e.target.value - 1]);
	};
	const endHunt = () => {
		Axios.put(
			`http://localhost:3033/hunters/mybandits/${myId}/attrape/${currentBandit.id}`,
			currentBandit
		)
			.then((res) => {
				alert('hunt end confirmed');
				console.log(res);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	};

	return (
		<div className='sherif'>
			<h1>Sherif</h1>
			<h2>Your bounty list</h2>
			<Navbar />
			<div className='mybandits'>
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
			<button className='button left' onClick={handlePrev}>precedent</button>
			<button className='button middle' onClick={endHunt}>I catched him !</button>
			<button className='button right' onClick={handleNext}>suivant</button>
		</div>
	);
}
