import React, { useContext, createContext, useState } from 'react';
import fakeAuth from './fakeAuth';
import { useHistory } from 'react-router-dom';

export default const authContext = createContext();

export default function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function useAuth() {
	return useContext(authContext);
}

export default function useProvideAuth() {
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

export default function AuthButton() {
	let history = useHistory();
	let auth = useAuth();

	return auth.user ? (
		<p>
			Welcome!{' '}
			<button
				onClick={() => {
					auth.signout(() => history.push('/'));
				}}>
				Sign out
			</button>
		</p>
	) : (
		<p>You are not logged in.</p>
	);
}
