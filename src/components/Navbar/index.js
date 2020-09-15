import React from 'react';
import logoImg from '../../assets/images/logo-light.png';
import userImg from '../../assets/images/users/user-1.jpg';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo-box">
				<div className="logo">
					<img src={logoImg} alt="logo" />
				</div>
			</div>

			<div className="topnav">
				<ul className="menu">
					<li>
						<div className="icon-btn">
							<span className="iconify" data-icon="mdi:menu" data-inline="false" />
						</div>
					</li>
				</ul>

				<ul className="menu">
					<li>
						<div className="icon-btn">
							<span className="iconify" data-icon="mdi:bell-outline" data-inline="false" />
						</div>
					</li>
					<li>
						<div className="profile">
							<img src={userImg} alt="user" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
