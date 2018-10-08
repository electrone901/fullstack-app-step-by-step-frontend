import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	

	render() {
		const authLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/" className="nav-link">Welcome, user</Link>
				</li>
				<li className="nav-item">
					<Link  to="/" className="nav-link">Logout</Link>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/register" className="nav-link">Sign Up</Link>
				</li>
				<li className="nav-item">
					<Link to="/login" className="nav-link">Login</Link>
				</li>
			</ul>
		);

		const authLinks2 = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/Portfolio" className="nav-link">Portfolio</Link>
				</li>
				<li className="nav-item">
					<Link to="/transactions" className="nav-link"> Transactions</Link>
				</li>
			</ul>
		)


		return(
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4"> 
				
				<div className="container">
					<Link to="/" className="navbar-brand" >ETRADE</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="mobole-nav">
						{authLinks2}
						{guestLinks}
						{authLinks}
					</div>

				</div>

			</nav>
		)
	}
}

export default Navbar;