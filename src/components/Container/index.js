import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../assets/routes';

const Container = () => {
	return (
		<div className="main">
			<div className="content">
				<Switch>
					{routes.map((route, index) => {
						return route.component ? (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								name={route.name}
								component={route.component}
							/>
						) : null;
					})}
					<Redirect from="/" to="/dashboard" />
				</Switch>
			</div>
		</div>
	);
};

export default Container;
