import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const style = {
		margin: 10,
		color: 'black',
	};

	return (
		<div>
			<Link to='/sherif' style={style}>
				Sherif
			</Link>
			<Link to='/bounty' style={style}>
				Add a bounty
			</Link>
			<Link to='/bountylist' style={style}>
				Bountylist
			</Link>
		</div>
	);
}
