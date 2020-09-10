import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import Sidebar from '../Components/SideBar/Sidebar';
import ErrorBoundry from '../Components/Error/ErrorBoundry';
const PublicRoute = (
	<div className="home">
		<ErrorBoundry>
			<Sidebar />
			<Switch>
				{routes.map(({component: Component, path, ...rest}, index) => {
					return <Route key={index} {...rest} path={path} render={(props) => <Component {...props} />} />;
				})}
			</Switch>
		</ErrorBoundry>
	</div>
);
export default PublicRoute;
