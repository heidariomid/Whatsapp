import React, {useEffect, useState} from 'react';
import {Avatar} from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import '../../style/SidebarChat.css';
const SideBarChat = ({addNewChat}) => {
	const [seed, setSeed] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 9 + 1));
	}, [seed]);
	const createChat = () => {
		prompt('Enter Your Name');
	};
	return !addNewChat ? (
		<div className="sidebar__chat">
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.${'svg'}`} />
			<div className="sidebar__chat_info">
				<h2>room</h2>
				<p>last msg...</p>
			</div>
		</div>
	) : (
		<div className="sidebar__chat" onClick={createChat}>
			<div className="sidebar__chat__add">
				<AddOutlinedIcon />
				<h2>Add New Chat</h2>
			</div>
		</div>
	);
};

export default SideBarChat;
