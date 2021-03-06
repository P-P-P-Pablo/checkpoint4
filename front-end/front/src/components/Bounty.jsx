import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './navbar/SherifBar';
import axios from 'axios';
import '../styles/Sherif.css';

export default function Bounty() {
	const myId = 6;
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		data.status = 'libre';
		axios
			.post('http://localhost:3033/hunters/mybandits/' + myId, data)
			.then((res) => {
				alert('Prime posté');
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	};

	return (
		<div className='sherif'>
			<h1>Sherif</h1>
			<h2>Welcome to bounty page</h2>
			<Navbar />
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<div className="mybandits">
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* register your input into the hook by invoking the "register" function */}
					<input
						name='name'
						placeholder='Name of the Bandit'
						ref={register({ required: true })}
					/>

					<select name='region' ref={register({ required: true })}>
						<option value='ici'>Içi</option>
						<option value='la'>Là</option>
						<option value='la-bas'>Là-bas</option>
					</select>

					<select name='dead_or_alive' ref={register({ required: true })}>
						<option value='dead'>Dead</option>
						<option value='alive'>Alive</option>
						<option value='dead or alive'>Dead or Alive</option>
					</select>
					<label>
						<input
							type='number'
							name='prime'
							min='10'
							max='10000'
							ref={register({ required: true })}
						/>
						$
					</label>
					<input
						name='photo'
						type='url'
						placeholder='url of the photo'
						ref={register({ required: true })}
					/>
					{/* include validation with required or other standard HTML validation rules */}

					{/* errors will return when field validation fails  */}
					{errors && <span>All fields are required</span>}

					<input type='submit' />
				</form>
			</div>
		</div>
	);
}
