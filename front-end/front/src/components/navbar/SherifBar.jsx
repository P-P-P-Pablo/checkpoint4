import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	

	return (
		<div className="navbar">
			<Link to='/sherif' className="navbarLink">
				Sherif
			</Link>
			<Link to='/bounty' className="navbarLink">
				Add a bounty
			</Link>
			<Link to='/bountylist' className="navbarLink">
				Bountylist
			</Link>
		</div>
	);
}
