import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		}
	}

	componentDidMount() {

	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
	}

	render() {
		const {errors} = this.state;
		return(
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<form onSubmit={this.onSubmit}>
								<div className="form-control">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Name"
										name="name"
										value={this.state.name}
										onChange={this.onChange}
									/>
									{errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
								</div>
								<div className="form-group">
									<input 
										type="email"
										className="form-control form-control-lg"
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
									{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
								</div>
								<div className="form-control">
									<input 
										type="password"
										className="form-control form-control-lg"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
									{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
								</div>
								<div className="form-control">
									<input 
										type="password"
										className="form-control form-control-lg"
										placeholder="Confirm Password"
										name="password2"
										value={this.state.password}
										onChange={this.onChange}
									/>
									{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
								</div>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}


}

export default Register;





