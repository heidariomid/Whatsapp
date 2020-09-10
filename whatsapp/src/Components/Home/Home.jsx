import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import Sidebar from '../SideBar/Sidebar';
import '../../style/Home.css';
import Chats from '../Chat/Chats';

const Home = ({status}) => {
	return (
		<div>
			{/* <Sidebar /> */}
			{status ? <Chats /> : <h1>NO CHAT FOUND</h1>}
		</div>
	);
};

const State = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages, status: state.users.status});
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
export default connect(State, Dispatch)(Home);
