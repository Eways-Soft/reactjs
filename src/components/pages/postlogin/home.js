import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Categoryiconlink from '../includes/categoryiconlink';
import './index.css'

const home = () => {
    return (
	    	<Container>
	    		<Categoryiconlink />
	    	</Container>
    );
}

export default home;