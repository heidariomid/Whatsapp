import React, {useState, useEffect} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import {useParams} from 'react-router-dom';
import firebase from 'firebase';
import '../../style/Chat.css';
import db from '../../db/firebase';

const Chats = ({sendMessage, user}) => {
	const {roomId} = useParams();
	const [inputValue, setInputValue] = useState('');
	const [roomName, setRoomName] = useState('');
	const [messages, setMessages] = useState([]);
	const sendMessageHandler = (e) => {
		e.preventDefault();
		sendMessage({messages: inputValue});
		setInputValue('');
		db.collection('rooms').doc(roomId).collection('messages').add({
			message: inputValue,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};
	useEffect(() => {
		if (roomId) {
			db.collection('rooms')
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomName(snapshot.data().name));
		}
		db.collection('rooms')
			.doc(roomId)
			.collection('messages')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
	}, [roomId]);
	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar />
				<div className="chat_header_info">
					<h3>{roomName}</h3>
					<p>last seen {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleTimeString()}</p>
				</div>
				<div className="chat_header_right">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<AttachFileOutlinedIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat_body">
				{messages.map((message) => (
					<p className={`chat_body_msg ${message.name === user.displayName && 'msg_reciever'}`}>
						<span className="chat_body_name">{message.name}</span>
						<span>{message.message}</span>
						<span className="chat_body_timestamp">{new Date(message.timestamp?.toDate()).toLocaleTimeString()}</span>
					</p>
				))}
			</div>
			<div className="chat_footer">
				<InsertEmoticonIcon />
				<form>
					<input type="text" value={inputValue} placeholder="type something..." onChange={(e) => setInputValue(e.target.value)} />
					<button type="submit" onClick={sendMessageHandler}>
						send
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
};

const State = (state) => ({user: state.users.items});
const Dispatch = (dispatch) => {
	return {
		sendMessage: (payload) => {
			dispatch({
				type: actions.SEND_MESSAGE,
				payload,
			});
		},
	};
};
export default connect(State, Dispatch)(Chats);
