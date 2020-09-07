import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import '../../style/Chat.css';
const Chats = () => {
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
			<div className="chat_body"></div>
			<div className="chat_footer"></div>
		</div>
	);
};

export default Chats;
