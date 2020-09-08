import NotFound from '../Components/NotFound';
import Chat from '../Components/Chat/Chats';
import Home from '../Components/Home/Home';
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/room/:roomId',
		exact: true,
		component: Chat,
	},
	{
		component: NotFound,
	},
];

export default routes;
