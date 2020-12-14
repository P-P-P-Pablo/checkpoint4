import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const style = {
		margin: 10,
		color: 'black',
	};

	return (
		<div>
			<Link to='/' style={style}>
				Home
			</Link>
			<Link to='/about' style={style}>
				About
			</Link>
			<Link to='/sherif' style={style}>
				Sherif
			</Link>
			<Link to='/hunter' style={style}>
				Hunter
			</Link>
		</div>
	);
}
