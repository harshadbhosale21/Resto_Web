import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed">
                <div className="container-fluid">
                    <NavLink className='navbar-brand'>HungryHub</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target='#nav-collapse' aria-controls='nav-collapse' aria-expanded='false' aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-0 mx-lg-2">
                                <NavLink to='' className='nav-link nav-list-item'>Home</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-2">
                                <NavLink to='' className='nav-link nav-list-item'>About</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-2">
                                <NavLink to='' className='nav-link nav-list-item'>Menu</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-2">
                                <NavLink to='' className='nav-link nav-list-item'>Events</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-2">
                                <NavLink to='' className='nav-link nav-list-item'>Chefs</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-2">
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
                            <li className="nav-item mx-0 mx-lg-2">
                                <NavLink to='' className='nav-link nav-list-item'>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="btn btn-danger">Book a Table</div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export { Navbar };