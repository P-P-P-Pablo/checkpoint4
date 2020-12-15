import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const style = {
		margin: 10,
		color: 'black',
	};

	return (
		<div>
			<Link to='/huntlist' style={style}>
				List of my hunt
			</Link>
			<Link to='/hunter' style={style}>
				Hunter
			</Link>
		</div>
	);
}
