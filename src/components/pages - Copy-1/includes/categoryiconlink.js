import React from 'react'; 
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const categoryiconlink = () => {
    return (
    		<div>
				<Container className="justify-content-md-center">
					<Row className="justify-content-md-center">
						<Col xs lg="2">What's on your plate?</Col>
					</Row>

					<Row className="justify-content-md-center">
						<Col xs lg="2">
							<Image src="https://www.foodzzo.com/demo/public/eways/img/make-icon.png" rounded />
						</Col>
						<Col xs lg="2">
							<Image src="https://www.foodzzo.com/demo/public/eways/img/dine-icon.png" rounded />
						</Col>
						<Col xs lg="2">
							<Image src="https://www.foodzzo.com/demo/public/eways/img/try-icon.png" rounded />
						</Col>
					</Row>
				</Container>

				<Container>
					<Row className="justify-content-md-center">
						<Row className="justify-content-md-center">
						
						</Row>
						
					</Row>

					
				</Container>

			</div>
	);

}

export default categoryiconlink;