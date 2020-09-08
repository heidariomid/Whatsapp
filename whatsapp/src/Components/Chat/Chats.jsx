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

import '../../style/Chat.css';

const Chats = ({sendMessage, messages}) => {
	const {roomId, hi} = useParams();
	const [inputValue, setInputValue] = useState('');
	const sendMessageHandler = (e) => {
		e.preventDefault();
		sendMessage({messages: inputValue});

		setInputValue('');
	};

	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar />
				<div className="chat_header_info">
					<h3>title</h3>
					<p>description</p>
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
				<p className="chat_body_msg">
					<span className="chat_body_name">omid</span>
					hi Guys
					<span className="chat_body_timestamp">23:43</span>
				</p>
				<p className="chat_body_msg msg_reciever">
					<span className="chat_body_name">ati</span>
					{messages}
					<span className="chat_body_timestamp">23:44</span>
				</p>
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

const State = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages});
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
