import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './../navbar/Navbar';
import axios from 'axios';

export default function Bounty() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		let trueData = data;
		delete trueData['password confirmation'];
		//attention à pas envoyer la confirmation du password
		axios
			.post(`http://localhost:3033/${data.role}s/signup`, trueData)
			.then((res) => {
				alert('sign up confirmed');
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	};

	return (
		<>
			<h1>Sign Up</h1>
			<h2>Welcome to HuntER</h2>
			<Navbar />
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<div className='mybandits'>
				<form onSubmit={handleSubmit(onSubmit)}>
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
						name='pass'
						type='password'
						placeholder='password'
						maxlength={10}
						minlength={6}
						ref={register({ required: true })}
					/>
					<input
						name='password confirmation'
						type='password'
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
			</div>
		</>
	);
}
