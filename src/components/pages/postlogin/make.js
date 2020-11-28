import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import InfiniteScroll from 'react-infinite-scroller';

export default class make extends React.Component {

	componentDidMount = async () => {

	}

	loadFunc() {
		console.log('call.')
	}

	render() {
	    return (
		    	<Container>
					<div style={{height:'700px',overflow:'auto'}}>
					    <InfiniteScroll
					        pageStart={0}
					        loadMore={this.loadFunc()}
					        hasMore={true || false}
					        loader={<div className="loader" key={0}>Loading ...</div>}
					        useWindow={false}
					    >
					       
					    </InfiniteScroll>
					</div>
		    	</Container>
	    );
	}
}
