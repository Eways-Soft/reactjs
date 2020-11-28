import React from 'react'; 
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const categoryiconlink = () => {
    return (
			<div>
				<Row className="justify-content-md-center">
					<Col xs lg="2">What's on your plate?</Col>

				</Row>

				<Row className="d-flex justify-content-center">

					<Col xs lg="1">
						<a href="/make"><Image src="https://www.foodzzo.com/demo/public/eways/img/make-icon.png" rounded /></a>
					</Col>
					<Col xs lg="1">
						<a href="/dine"><Image src="https://www.foodzzo.com/demo/public/eways/img/dine-icon.png" rounded /></a>
					</Col>
					<Col xs lg="1">
						<a href="/try"><Image src="https://www.foodzzo.com/demo/public/eways/img/try-icon.png" rounded /></a>
					</Col>
				</Row>
			</div>
			
	);

}

export default categoryiconlink;