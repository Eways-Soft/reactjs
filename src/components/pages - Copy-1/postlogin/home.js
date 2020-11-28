import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import Categoryiconlink from '../includes/categoryiconlink';

const home = () => {
    return (
    	<div>
	    	<Categoryiconlink />
	    	<Container className="justify-content-md-center">

				<Row className="justify-content-md-center">
					<Col xs lg="2">
						<Image src="https://www.foodzzo.com/demo/media/profilepics/2020/07/31/Dev1_image1596165985.png" roundedCircle  style={{height:'30px',width:'30px'}} />
					</Col>
					<Col xs lg="2">Dev1 <span><Image src="https://www.foodzzo.com/demo/public/eways/img/dine-icon.png" rounded /></span><span>2 days ago</span>
					</Col>
					<Col xs lg="2">
						<Image src="https://www.foodzzo.com/demo/media/profilepics/2020/07/31/Dev1_image1596165985.png" roundedCircle  style={{height:'30px',width:'30px'}} />
					</Col>
				</Row>

				<Row className="justify-content-md-center">
					<Image src="https://www.foodzzo.com/demo/media/images/2020/9/28/Dev1_image_1601286320502667.png" rounded />
				</Row>
	    	</Container>
		</div>
    );
}

export default home;