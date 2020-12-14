import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './navbar/SherifBar';

export default function Bounty() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it
	return (
		<>
			<h1>Sherif</h1>
			<h2>Welcome to Sherif page</h2>
			<Navbar />
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<input name='example' defaultValue='test' ref={register} />

				{/* include validation with required or other standard HTML validation rules */}
				<input name='exampleRequired' ref={register({ required: true })} />
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}

				<input type='submit' />
			</form>
		</>
	);
}
