import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './navbar/SherifBar';
import axios from 'axios';

export default function Bounty() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data)
	};

	return (
		<>
			<h1>Sign Up</h1>
			<h2>Welcome to HuntER</h2>
			<Navbar />
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{
					display: 'flex',
					flexFlow: 'column nowrap',
					margin: 10,
					maxWidth: 600,
				}}>
				{/* register your input into the hook by invoking the "register" function */}
				<input
					name='name'
					placeholder='What you want to be called'
					ref={register({ required: true })}
				/>

				<select name='localisation' ref={register({ required: true })}>
					<option value='ici'>Içi</option>
					<option value='la'>Là</option>
					<option value='la-bas'>Là-bas</option>
				</select>

				<select name='role' ref={register({ required: true })}>
					<option value='sherif'>Sherif</option>
					<option value='hunter'>Bounty Hunter</option>
				</select>

				<input
					name='password'
					type="password"
					placeholder='password'
					maxlength={10}
					minlength={6}
					ref={register({ required: true })}
				/>
				<input
					name='password confirmation'
					type="password"
					placeholder='password'
					maxlength={10}
					minlength={6}
					ref={register({ required: true })}
				/>

				
				{/* include validation with required or other standard HTML validation rules */}

				{/* errors will return when field validation fails  */}
				{errors && <span>All fields are required</span>}

				<input type='submit' />
			</form>
		</>
	);
}
