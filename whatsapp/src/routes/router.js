import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import Sidebar from '../Components/SideBar/Sidebar';
const PublicRoute = (
	<div className="home">
		<Sidebar />
		<Switch>
			{routes.map(({component: Component, path, ...rest}, index) => {
				return <Route key={index} {...rest} path={path} render={(props) => <Component {...props} />} />;
			})}
		</Switch>
	</div>
);
export default PublicRoute;
