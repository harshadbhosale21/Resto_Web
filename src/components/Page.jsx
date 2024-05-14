import React from "react";

const Pages = () => {
    return (
        <>
            <Home />
            <About />
            <Menu />
        </>
    )
}

const Home = () => {
    return (
        <>
            <section className="section section-bg">
                <div className="container">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-12 col-lg-5 order-2 order-lg-1 home-col1 d-flex flex-column justify-content-center align-items-center-align-items-lg-start text-center text-lg-start">
                            <h2>Enjoy Your Healhty <br /> Delicious Food</h2>
                            <p className="py-2">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                            <div className="home-btn">
                                <button className="btn btn-danger" style={{ borderRadius: '28px' }}>Book a Table</button>
                                <button className="btn btn-warning mx-2" style={{ borderRadius: '28px' }}>Order Online</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2 justify-content-center">
                            <img src="/images/header-img.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {
    return (
        <>
            <section className="section-2">
                <div className="container">
                    <div className="section-header">
                        <h2>About Us</h2>
                        <p>Learm More <span style={{ color: 'red' }}>About Us</span>
                        </p>
                    </div>
                    <div className="row gy-4">
                        <div className="col-12 col-lg-6 about-col1 d-flex align-items-end justify-content-center p-3">
                            <div className="booking-no text-center mb-5">
                                <h3 className="text-danger fw-bold">Book a Table</h3>
                                <h4 className="text-dark">+00 1233232</h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-end">
                            <div className=" ps-0 ps-lg-5 about-col2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="abt-list">
                                    <li className="ms-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li className="ms-2">Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li className="ms-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p className="mt-3">
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </p>
                                <div className="mt-4 position-relative text-center bg-danger abt-box">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-2 section-bg">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 col-lg-4 px-1">
                            <div className="bg-danger text-start text-light p-4">
                                <h3>Why Choose <br /> HungryHUb?</h3>
                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae error, iusto magnam libero dolorem modi velit consectetur. Vel, deserunt. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                                <div className="my-2 text-center">
                                    <button className="btn btn-outline-light">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 px-2 d-flex align-items-center">
                            <div className="row ">
                                <div className="col-12 col-xl-4 p-2">
                                    <div className="p-2 bg-light text-center text-dark">
                                        <h3>Lorem, ipsum.</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quod!</p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 p-2 ">
                                    <div className="p-2 bg-light text-center text-dark">
                                        <h3>Lorem, ipsum.</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quod!</p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 p-2">
                                    <div className="p-2 bg-light text-center text-dark">
                                        <h3>Lorem, ipsum.</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quod!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid stats px-0">
                <div className="stats-hsla ">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-12 col-lg-3 text-center text-light">
                                <h2>233</h2>
                                <h3>Clients</h3>
                            </div>
                            <div className="col-12 col-lg-3 text-center text-light">
                                <h2>233</h2>
                                <h3>Clients</h3>
                            </div>
                            <div className="col-12 col-lg-3 text-center text-light">
                                <h2>233</h2>
                                <h3>Clients</h3>
                            </div>
                            <div className="col-12 col-lg-3 text-center text-light">
                                <h2>233</h2>
                                <h3>Clients</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <>
            <section className="section-2">
                <div className="container">
                    <div className="section-header">
                        <h2>OUR MENU</h2>
                        <p>Check Our <span style={{ color: 'red' }}>Yummy Menu</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pages;