import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import Sidebar from '../SideBar/Sidebar';
import '../../style/Home.css';
import Chats from '../Chat/Chats';
const Home = ({messages}) => {
	return (
		<div className="home">
			<Sidebar />
			<Chats />
		</div>
	);
};

const State = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages});
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
