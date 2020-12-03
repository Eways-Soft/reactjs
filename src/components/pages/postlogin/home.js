import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Categoryiconlink from '../includes/categoryiconlink';
import './index.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const home = () => {
    return (
	    	<Container>
	    		<Categoryiconlink />
				<Row className="justify-content-md-center">
					<Col xs lg="2">
						<Image src="https://www.foodzzo.com/demo/media/profilepics/2020/07/31/Dev1_image1596165985.png" roundedCircle  style={{height:'30px',width:'30px'}} />
						<span>Dev1</span><span>2 days ago</span>
					</Col>
				</Row>

				<Row className="justify-content-md-center">	
					<Col xs lg="6">
				      <Carousel showArrows={true} showThumbs={false}>
	                    <img src="https://www.foodzzo.com/demo/media/profilepics/2020/07/31/Dev1_image1596165985.png" />
	                    <img src="https://www.foodzzo.com/demo/media/images/2020/11/25/cleankorean_image1606348465637141.jpeg" />
	                    <img src="https://www.foodzzo.com/demo/media/profilepics/2020/07/31/Dev1_image1596165985.png" />
		            </Carousel>
					</Col>					
				</Row>
	    	</Container>
    );
}

export default home;