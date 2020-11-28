import React from 'react'; 
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { DropdownButton,Dropdown,Col,Row,Container,Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const header = () => {
    return (
    		<Container>
				<div className="row">
					<div className="col-sm-4"><img src="https://www.foodzzo.com/demo/public/frontend/images/logo.png" />
					</div>
					<div className="col-sm-4">
						<input type="text" placeholder="search" id="searchfield" />
					</div>


					<div className="col-sm-4">
						<DropdownButton id="dropdown-basic-button" title="Dropdown button">
							<Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Invite Friends</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Messages</Dropdown.Item>
							<Dropdown.Item href="#/action-4">Saved</Dropdown.Item>
							<Dropdown.Item href="#/action-5">Logout</Dropdown.Item>
						</DropdownButton>
					</div>
				</div>
			</Container>

	);

}

export default header;