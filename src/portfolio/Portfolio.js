import React, { Component } from 'react';

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			stocks: [],
			name: '',
			error: '',
			show: false
		};
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		// api call
		//get data and set it to stocks data
	}

	buyStocks = (symbol, price, quantity) => {
		//add them to transactions
	}

	render() {
		// const {user} = this.props.auth;
		let stockInfo;

		stockInfo = (
			<div className="border border-primary mt-3">
				{
					<div>
						<p> Symbol: add symbol{}</p>
						<p> Price: add symbol{}</p>
						<p> Volume: add symbol{}</p>
						<button onClick={this.buyStocks()}>buy</button>
					</div>
				}
			</div>
		);

		return (
			<div className="Portfolio">
				<h1 className="text-center">Portfolio</h1>
				<p className="text-center">You have $ add money{}</p>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Stock Name"
						name="name"
						onChange={this.onChange}
					/>
					<input type="submit" />
					{this.state.show ? stockInfo : null}
					<p>{this.state.error}</p>
				</form>
			</div>
		)
	}
}

export default Portfolio;