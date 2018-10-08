import React, { Component } from 'react';

class Transactions extends Component {

	componentDidMount() {
		//get data from API for transactions 
	}

	render() {
		// const {transactions, loading} = this.state.transactions;
		// let transactionContent;

		// if(transactions === null || loading) {
		// 	transactionContent = <p>loading</p>
		// }
		// else {
		// 	transactionContent = <TransactionsList transactions={transactions} />;
		// }

		return(
			<div>
				<h1>Transactions</h1>
			</div>
		)
	}
}

export default Transactions;