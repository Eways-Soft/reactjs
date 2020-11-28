import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ZoomSlider from 'react-instagram-zoom-slider';

import Categoryiconlink from '../includes/categoryiconlink';
import './index.css';

const IMG_URLS = [
  'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
  'https://source.unsplash.com/ulJYHTb86Bo/1600x1600',
  'https://source.unsplash.com/GCm0tha8IGY/1600x1600',
  'https://source.unsplash.com/T0nxUz68lG0/1600x1600',
  'https://source.unsplash.com/2d4lAQAlbDA/1600x1600',
  'https://source.unsplash.com/qQQdRI_Y7iw/1600x1600',
]

const slides = IMG_URLS.map(src => <img src={src} alt="Pascale Dress - Floral" draggable="false" />);

const trys = () => {
    return (
	    	<Container>
	    		<Categoryiconlink />
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
					<Col xs lg="6">
				      <ZoomSlider slides={slides} style={{width:'100px'}} />
					</Col>					
				</Row>
	    	</Container>
    );
}

export default trys;