import React from 'react';
import '../styles/banditcard.css';

export default function BanditCard(props) {
	return (
		<div className='banditcontainer'>
			<div className='banditcard'>
				<>
				<img
					className='banditphoto'
					src={props.bandit.photo}
					alt={props.bandit.name}
				/></>
				<h1 className='banditname'>{props.bandit.name}</h1>
				<h2 className='banditprime'>{props.bandit.prime}$</h2>
				<h1 className='banditdead'>{props.bandit.dead_or_alive}</h1>
				<h3 className='banditregion'>{props.bandit.region}</h3>
				<h3 className='banditstatus'>{props.bandit.status}</h3>
			</div>
		</div>
	);
}
