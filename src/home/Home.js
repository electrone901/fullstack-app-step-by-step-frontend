import React, {Component} from 'react';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.jpg';
import Img3 from '../img/img3.jpg';
import Img4 from '../img/img4.jpg';
import { Link } from 'react-router-dom';


class Home extends Component {
	render() {
		// const {isAunthenticated} = this.props.auth;  
		const authLink = (
			<div>
				<li className="btn bnt-light">
					<a className="nav-link"> Porfolio</a>
				</li>
			</div>
		)
		return (
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			    <div className="carousel-caption d-none d-md-block">
				    <h3 className="addColor">Invest in companies with high growth potential that are improving the world. Invest as Low as $50. Choose Your Portfolio Mix.</h3>
				    <button className="btn btn-primary" type="button">Start Now</button>
				    <button className="btn btn-success" type="button">Portfolio</button>
				  </div>
			      <img className="d-block w-100" src={Img1} alt="First slide"/>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src={Img2} alt="Second slide"/>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src={Img4} alt="Third slide"/>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src={Img3} alt="Third slide"/>
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		)
	}
}
export default Home;