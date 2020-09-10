import React, {useEffect, useState} from 'react';
import {Avatar} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import '../../style/SidebarChat.css';
import db from '../../db/firebase';
const SideBarChat = ({addNewChat, name, id, fetchUser}) => {
	const [seed, setSeed] = useState('');
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		if (id) {
			db.collection('rooms')
				.doc(id)
				.collection('messages')
				.orderBy('timestamp', 'desc')
				.onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
		}
	}, [id]);
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 9 + 1));
	}, [seed]);
	const createChat = () => {
		const name = prompt('Enter Your Name');
		if (name) {
			db.collection('rooms').add({name});
		}
	};
	const chatHandler = () => {
		return fetchUser({status: true});
	};
	return !addNewChat ? (
		<Link to={`/room/${id}`}>
			<div className="sidebar__chat" onClick={chatHandler}>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.${'svg'}`} />
				<div className="sidebar__chat_info">
					<h2>{name}</h2>
					<p>{messages[0]?.message}</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebar__chat" onClick={createChat}>
			<div className="sidebar__chat__add">
				<AddOutlinedIcon />
				<h2>Add New Chat</h2>
			</div>
		</div>
	);
};
const State = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages, status: state.users.status});

const Dispatch = (dispatch) => {
	return {
		fetchUser: (payload) => {
			dispatch({
				type: actions.CHAT_STATUS,
				payload,
			});
		},
	};
};
export default connect(State, Dispatch)(SideBarChat);
