import React, { useContext, createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const fakeAuth = {
	isAuthenticated: true,
	signin(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	},
};

const authContext = createContext();

function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
	return useContext(authContext);
}

function useProvideAuth() {
	const [user, setUser] = useState(null);

	const signin = (cb) => {
		return fakeAuth.signin(() => {
			setUser('user');
			cb();
		});
	};

	const signout = (cb) => {
		return fakeAuth.signout(() => {
			setUser(null);
			cb();
		});
	};

	return {
		user,
		signin,
		signout,
	};
}

function AuthButton() {
	let history = useHistory();
	let auth = useAuth();

	return auth.user ? (
		<p>
			Welcome!{' '}
			<button
				className='button'
				onClick={() => {
					auth.signout(() => history.push('/'));
				}}>
				Sign out
			</button>
		</p>
	) : (
		<>
			<button
				className='button'
				onClick={() => {
					auth.signin(() => history.push('/'));
				}}>
				Sign in
			</button>
			<p>You are not logged in.</p>
		</>
	);
}

const Authentication = { useAuth, ProvideAuth, AuthButton };
export default Authentication;
