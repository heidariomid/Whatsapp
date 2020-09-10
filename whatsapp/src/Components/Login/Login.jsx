import React from 'react';
import {Button} from '@material-ui/core';
import WhatsAppLogo from '../../images/WhatsApp.svg';
import '../../style/Login.css';
import {actions} from '../../store/actions';
import {connect} from 'react-redux';
import {auth, provider} from '../../db/firebase';
const Login = ({setUser}) => {
	const loginHandler = () => {
		auth.signInWithPopup(provider)
			.then((res) => {
				setUser({
					user: res.user,
					isLogin: true,
				});
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<div className="login">
			<div className="login_container">
				<img src={WhatsAppLogo} alt="logo" />
				<div className="login_text">
					<h1>WhatsApp</h1>
				</div>
				<Button onClick={loginHandler}>Login with Google</Button>
			</div>
		</div>
	);
};

const State = (state) => ({userState: state.users.items, isUserLoggedIn: state.users.login});
const Dispatch = (dispatch) => {
	return {
		setUser: (payload) => {
			dispatch({
				type: actions.AUTHENTICATION,
				payload,
			});
		},
	};
};
export default connect(State, Dispatch)(Login);
