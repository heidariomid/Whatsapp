import React, {useState, useEffect} from 'react';
import db from '../../db/firebase';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import '../../style/SideBar.css';
import SideBarChat from './SideBarChat';
const Sidebar = () => {
	const [rooms, setRooms] = useState([]);
	useEffect(() => {
		db.collection('rooms').onSnapshot((snapShot) =>
			setRooms(
				snapShot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				})),
			),
		);
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar_headerRight">
					<div className="sidebar_headerRight_hideOnMobile">
						<IconButton>
							<DonutLargeIcon />
						</IconButton>
						<IconButton>
							<ChatIcon />
						</IconButton>
					</div>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlinedIcon />
					<input type="text" placeholder="search or start new chat" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SideBarChat addNewChat />
				{rooms.map((room) => (
					<SideBarChat key={room.id} id={room.id} name={room.data.name} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
