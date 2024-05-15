import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed py-3 py-lg-3">
                <div className="container-fluid">
                    <NavLink className='navbar-brand'>HungryHub</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target='#nav-collapse' aria-controls='nav-collapse' aria-expanded='false' aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='/#Home' className='nav-link nav-list-item'>Home</NavLink>
                            </li>
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='/#About' className='nav-link nav-list-item'>About</NavLink>
                            </li>
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='/#Menu' className='nav-link nav-list-item'>Menu</NavLink>
                            </li>
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='/#Events' className='nav-link nav-list-item'>Events</NavLink>
                            </li>
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='/#Chefs' className='nav-link nav-list-item'>Chefs</NavLink>
                            </li>
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='' className='nav-link nav-list-item'>Gallery</NavLink>
                            </li>
                            {/* <li class="nav-item dropdown mx-0 mx-lg-2">
                                <NavLink class="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </NavLink>
                                <ul class="dropdown-menu">
                                    <li><NavLink class="dropdown-item nav-link" to="#">Action</NavLink></li>
                                    <li><NavLink class="dropdown-item nav-link" to="#">Another action</NavLink></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><NavLink class="dropdown-item nav-link" to="#">Something else here</NavLink></li>
                                </ul>
                            </li> */}
                            <li className="nav-item nav-list mx-0 mx-lg-4">
                                <NavLink to='' className='nav-link nav-list-item'>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="btn btn-danger"><NavLink to='/book' className='nav-link'>Book a Table</NavLink></div>
                    </div>

                </div>
            </nav>
        </>
    )
}

const Footer = () => {
    return (

        <>
            <footer>
                <div className=" container footer-upper mb-3 mb-lg-5">
                    <div className="row gy-4">
                        <div className="col-12 col-lg-3 d-flex justify-content-start">
                            <div className="foot-icon"></div>
                            <div className="foot-info">
                                <h4>Address</h4>
                                <p>A108 M.G Road, <br /> Shivaji Nagar, Pune - 1212</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex justify-content-start">
                            <div className="foot-icon"></div>
                            <div className="foot-info">
                                <h4>Reservations</h4>
                                <p><span className="fw-bold">Phone:</span> +12 12121212</p>
                                <p><span className="fw-bold">Email:</span> hungryhubhb@mial.in</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex justify-content-start">
                            <div className="foot-info">
                                <h4>Opening Hours</h4>
                                <p><span className="fw-bold">Mon-Sat:</span> 9am - 11pm </p>
                                <p><span className="fw-bold">Sunday:</span> CLosed </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex justify-content-start">
                            <div className="foot-info">
                                <h4>Follow US</h4>
                                <p>A108 M.G Road, <br /> Shivaji Nagar, Pune - 1212</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" container footer-lower pt-3 pb-2 text-center">
                    <p>© Copyright <span className="fw-bold">HungryHUb</span>. All Rights Reserved</p>
                    <p>Designed by <span className="fw-bold">Harshad Bhosale</span></p>
                </div>
            </footer >

        </>
    )
}

export { Navbar, Footer };