import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Categoryiconlink from '../includes/categoryiconlink';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class trys extends React.Component {
	constructor() {
		super();
		this.state = {
			photos: [],
			fetchRecord: [],
			loading: false,
			page: 0,
			prevY: 0,
			currentPage: 1
		};
	}

	componentDidMount() {
		this.getPhotos(this.state.currentPage);

		var options = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0
		};

		this.observer = new IntersectionObserver(
			this.handleObserver.bind(this),
			options
		);
		this.observer.observe(this.loadingRef);
	}

	handleObserver(entities, observer) {
		const y = entities[0].boundingClientRect.y;
		console.log('handleObserver  ',y)
		if (this.state.prevY > y) {
			
			this.getPhotos();
			
		}
		this.setState({ prevY: y });
	}

	getPhotos(page) {
		this.setState({ loading: true });
		var currentPage = this.state.currentPage;

		axios
		.get(
		`https://www.foodzzo.com/demo/api/app/getUserPosts/71/3?page=${currentPage}`
		)
		.then(res => {			
			console.log(res);
			this.setState({ fetchRecord: [...this.state.fetchRecord, ...res.data.Data] });
			this.setState({ currentPage: this.state.currentPage+1 });
        	this.setState({ loading: false });		
		});
	}

	imageSliderImages(item){
		var length = item.profile_image.length;
		var profile_image = item.profile_image;
		if(length >= 1){
			return item.post_images.map(item2 => {
				return (
					<Image src={item2}  />
				);
			})
		}else{
			return(<div></div>);
		}
		

	}

  	render() {
	    // Additional css
	    const loadingCSS = {
	      height: "100px",
	      margin: "30px"
	    };

	    // To change the loading icon behavior
	    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

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

				<div className="container">
					<div style={{ minHeight: "800px" }}>
						{this.state.fetchRecord.map(item => (
							<div className="justify-content-md-center">
								<div className="col-lg-6 col">
									<Image src={item.profile_image} roundedCircle  style={{height:'30px',width:'30px'}} />
									<span>{item.user_name}</span><span>{item.post_time_ago}</span>
								</div>
								<div className="col-lg-6 col">
									<Carousel showArrows={true} showThumbs={false}>
								      	{this.imageSliderImages(item)}
					            	</Carousel>
								</div>

							</div>
							

						))}
					</div>
					<div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingCSS} >
						<span style={loadingTextCSS}>Loading...</span>
					</div>
				</div>

	    	</Container>


				
    );
  }
}