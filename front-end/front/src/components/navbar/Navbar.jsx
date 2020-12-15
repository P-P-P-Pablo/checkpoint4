import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	

	return (
		<div className="navbar">
			<Link to='/' className="navbarLink">
				Home
			</Link>
			<Link to='/about' className="navbarLink">
				About
			</Link>
			<Link to='/signin' className="navbarLink">
				Sign In
			</Link>
			<Link to='/signup' className="navbarLink">
				Sign Up
			</Link>
			<Link to='/sherif' className="navbarLink">
				Sherif
			</Link>
			<Link to='/hunter' className="navbarLink">
				Hunter
			</Link>
		</div>
	);
}
