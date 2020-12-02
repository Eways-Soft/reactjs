import React, { Component } from "react";
import axios from "axios";


export default class trys extends React.Component {
  

  constructor() {
    super();
    this.state = {
      photos: [],
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

  /*handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    console.log('handleObserver  ',y)
    if (this.state.prevY > y) {
      const lastPhoto = this.state.photos[this.state.photos.length - 1];
      const curPage = lastPhoto.albumId;
      this.getPhotos(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }*/

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    console.log('handleObserver  ',y)
    if (this.state.prevY > y) {
      this.getPhotos();
      this.setState({ currentPage: this.state.currentPage+1 });
    }
    this.setState({ prevY: y });
  }

  /*getPhotos(page) {
    this.setState({ loading: true });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      )
      .then(res => {
      	console.log('jsonplaceholder  ',res)
        this.setState({ photos: [...this.state.photos, ...res.data] });
        this.setState({ loading: false });
      });

     var newpage = page+1;
     var currentPage = this.state.currentPage;

    axios
      .get(
        `https://www.foodzzo.com/demo/api/app/getUserPosts/71/0?page=${currentPage}`
      )
      .then(res => {
       	console.log(res)
       	this.setState({ currentPage: currentPage+1 });
      });
  }*/

	getPhotos(page) {
		var currentPage = this.state.currentPage;

		axios
		.get(
		`https://www.foodzzo.com/demo/api/app/getUserPosts/71/0?page=${currentPage}`
		)
		.then(res => {
		console.log(res)
		
		});

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
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          {this.state.photos.map(user => (
            <img src={user.url} height="100px" width="200px" />
          ))}
        </div>
        <div
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}