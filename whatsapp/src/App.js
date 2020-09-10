import React, {useEffect} from 'react';
import {actions} from './store/actions';
import './style/App.css';
import './style/Home.css';
import {connect} from 'react-redux';
import Components from './routes/router';
import Login from './Components/Login/Login';

const App = ({fetchUser, user}) => {
	useEffect(() => {
		fetchUser({messages: 'Redux is Connected'});
		console.log(user);
	}, [fetchUser]);
	return <div className="app">{user['uid'] ? Components : <Login />}</div>;
};
const State = (state) => ({user: state.users.items});
const Dispatch = (dispatch) => {
	return {
		fetchUser: (payload) => {
			dispatch({
				type: actions.FETCH_USER,
				payload,
			});
		},
	};
};
export default connect(State, Dispatch)(App);
