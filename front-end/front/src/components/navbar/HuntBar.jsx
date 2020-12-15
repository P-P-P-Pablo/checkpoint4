import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	

	return (
		<div className="navbar">
			<Link to='/huntlist' className="navbarLink">
				List of my hunt
			</Link>
			<Link to='/hunter' className="navbarLink">
				Hunter
			</Link>
		</div>
	);
}
