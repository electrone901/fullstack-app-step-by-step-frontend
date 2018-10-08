import React, {Component} from 'react';



class Navbar extends Component {
	

	render() {
		const authLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="user">Welcome, user</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="Logout">Logout</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="SignUp">Sign Up</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="Login">Login</a>
				</li>
			</ul>
		);

		const authLinks2 = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="Portfolio">Portfolio</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="Transactions"> Transactions</a>
				</li>
			</ul>
		)


		return(
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4"> 
				
				<div className="container">
					<a className="navbar-brand" href="#">ETRADE</a>
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