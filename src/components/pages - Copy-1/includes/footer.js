import React from 'react'; 
import { NavLink } from 'react-router-dom';

 
const footer = () => {
    return (
    	<div>
	    	<footer  className="page-footer font-small mdb-color lighten-3 py-3">
				<div  className="container-fluid text-center text-md-left footer-main">
					<div  className="d-sm-block d-md-flex justify-content-between align-item-center flex-md-row flex-sm-column">
					
							<div  className="fot-left">
								<span><a href="">About</a></span>
								<span><a href="">Advertise</a></span>
								<span><a href="">Privacy Policy</a></span>
							</div>
					
								<div  className="fot-mid">
									<span  className="social-icons">
										<ul>
											<li><a href="#"><i  className="zmdi zmdi-facebook"></i></a></li>
											<li><a href="#"><i  className="zmdi zmdi-twitter"></i></a></li>
											<li><a href="#"><i  className="zmdi zmdi-instagram"></i></a></li>
										</ul>
									</span>
								</div>
								<div  className="footer-text fot-right">
									<div  className="copyright"><p  className="m-0">© 2020 Foodzzo. All Rights Reserved </p></div>
								</div>
						
					</div>
				</div>
			</footer>
		</div>
		);
}

export default footer;