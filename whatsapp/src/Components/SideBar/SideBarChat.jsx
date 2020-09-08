import React, {useEffect, useState} from 'react';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import '../../style/SidebarChat.css';
import db from '../../db/firebase';
const SideBarChat = ({addNewChat, name, id}) => {
	const [seed, setSeed] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 9 + 1));
	}, [seed]);
	const createChat = () => {
		const name = prompt('Enter Your Name');
		if (name) {
			db.collection('rooms').add({name});
		}
	};
	return !addNewChat ? (
		<Link to={`/room/${id}`}>
			<div className="sidebar__chat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.${'svg'}`} />
				<div className="sidebar__chat_info">
					<h2>{name}</h2>
					<p>last msg...</p>
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

export default SideBarChat;
