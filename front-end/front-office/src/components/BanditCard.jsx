import React from 'react';

export default function BanditCard(props) {
	return (
		<>
			<img src={props.bandit.photo} alt={props.bandit.name} />
			<h1>{props.bandit.name}</h1>
			<h2>{props.bandit.prime}$</h2>
			<h1>{props.bandit.dead_or_alive}</h1>
			<h3>{props.bandit.region}</h3>
			<h3>{props.bandit.status}</h3>
		</>
	);
}
