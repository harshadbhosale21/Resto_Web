import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Pages = () => {
    return (
        <>
            <Home />
            <About />
            <Menu />
            <Events />
            <Chefs />
            <Contact />
        </>
    )
}

const Home = () => {
    return (
        <>
            <section className="section section-bg" id="Home">
                <div className="container">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-12 col-lg-5 order-2 order-lg-1 home-col1 d-flex flex-column justify-content-center align-items-center-align-items-lg-start text-center text-lg-start">
                            <h2>Enjoy Your Healhty <br /> Delicious Food</h2>
                            <p className="py-2">Indulge in the delight of nutritious and flavorful dishes crafted with care. At HungryHub, we're dedicated to providing you with not only delicious but also wholesome meals that nourish both body and soul.</p>
                            <div className="home-btn">
                                <button className="btn btn-danger" style={{ borderRadius: '28px' }}><NavLink to='/book' className='nav-link'>Book a Table</NavLink></button>
                                <button type="button" className="btn btn-warning mx-2" style={{ borderRadius: '28px' }}><NavLink to='/orderonline' className='nav-link'>Order Online</NavLink></button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
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
            <section className="section-2" id="About">
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
                                <p>Welcome to HungryHub, where passion meets palate, and every bite tells a story. We believe in the power of food to bring people together.</p>
                                <ul className="abt-list">
                                    <li className="ms-2">Indulge in a culinary journey that takes you around the world.</li>
                                    <li className="ms-2">Experience the warmth of hospitality as our dedicated team strives to make every visit a memorable one.</li>
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
                                <p className="mt-4">HungryHub is not just another restaurant; it's a culinary journey waiting to be explored. With a commitment to excellence and a passion for creating memorable dining experiences, we invite you to discover why HungryHub is the perfect choice for your next meal.</p>
                                <div className="my-2 text-center">
                                    <button className="btn btn-outline-light">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 px-2 d-flex align-items-center">
                            <div className="row ">
                                <div className="col-12 col-xl-4 p-2">
                                    <div className="p-3 abt-box-info bg-light text-center text-dark">
                                        <img src="/images/abt-box-1.png" className="my-2" alt="" />
                                        <h4>Quality Ingredients</h4>
                                        <p>At HungryHub, we believe that great food starts with great ingredients. That's why we source only the freshest, highest quality ingredients for every dish we serve</p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 p-2 ">
                                    <div className="p-3 abt-box-info  bg-light text-center text-dark">
                                        <img src="/images/abt-box-2.png" className="my-2" alt="" />
                                        <h4>Exceptional Service</h4>
                                        <p>At HungryHub, our commitment to excellence extends beyond the kitchen. From the moment you walk through our doors. Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 p-2">
                                    <div className="p-3 abt-box-info  bg-light text-center text-dark">
                                        <img src="/images/abt-box-3.png" className="my-2" alt="" />
                                        <h4>Community Engagement</h4>
                                        <p> Through various initiatives and partnerships, we actively engage with local organizations and charities to make a positive impact in our community.</p>
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
                            <div className="col-12 col-lg-3 stats-nums text-center text-light">
                                <h2>30</h2>
                                <p>Producers</p>
                            </div>
                            <div className="col-12 col-lg-3 stats-nums text-center text-light">
                                <h2>521</h2>
                                <p>Events Hosted</p>
                            </div>
                            <div className="col-12 col-lg-3 stats-nums text-center text-light">
                                <h2>100</h2>
                                <p>Workers</p>
                            </div>
                            <div className="col-12 col-lg-3 stats-nums text-center text-light">
                                <h2>500</h2>
                                <p>Daily Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// ******************************** Section Menu ********************************************* 

const Menu = () => {
    return (
        <>
            <section className="section-2" id='Menu'>
                <div className="container">
                    <div className="section-header">
                        <h2>OUR MENU</h2>
                        <p>Check Our <span style={{ color: 'red' }}>Yummy Menu</span></p>
                        <div className="container my-3 d-flex justify-content-center">
                            <div className="menu-nav">
                                <ul className="navbar-nav flex-row justify-content-between">
                                    <li className="nav-item menu-nav-list">
                                        <NavLink className='nav-link'><h4>Starter</h4></NavLink>
                                    </li>
                                    <li className="nav-item menu-nav-list">
                                        <NavLink className='nav-link'><h4>Breakfast</h4></NavLink>
                                    </li>
                                    <li className="nav-item menu-nav-list">
                                        <NavLink className='nav-link'><h4>Lunch</h4></NavLink>
                                    </li>
                                    <li className="nav-item menu-nav-list">
                                        <NavLink className='nav-link'><h4>Dinner</h4></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container my-2 py-2">
                            <div className="menu-header mt-2 mb-5 text-center">
                                <p>MENU</p>
                                <h3>BreakFast</h3>
                            </div>
                            <div className="menu-dish my-2">
                                <div className="row gy-4">
                                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                                        <div className="dish">
                                            <div className="dish-img ">
                                                <img src="/images/menu-item-1.png" className="img-fluid" width='75%' alt="" />
                                            </div>
                                            <div className="dish-info py-3 text-center">
                                                <h4>Magnam Tiste</h4>
                                                <p>Lorem, deren, trataro, filede, nerada</p>
                                                <h3>$5.95</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                                        <div className="dish">
                                            <div className="dish-img ">
                                                <img src="/images/menu-item-2.png" className="img-fluid" width='75%' alt="" />
                                            </div>
                                            <div className="dish-info py-3 text-center">
                                                <h4>Magnam Tiste</h4>
                                                <p>Lorem, deren, trataro, filede, nerada</p>
                                                <h3>$5.95</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                                        <div className="dish">
                                            <div className="dish-img ">
                                                <img src="/images/menu-item-3.png" className="img-fluid" width='75%' alt="" />
                                            </div>
                                            <div className="dish-info py-3 text-center">
                                                <h4>Magnam Tiste</h4>
                                                <p>Lorem, deren, trataro, filede, nerada</p>
                                                <h3>$5.95</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                                        <div className="dish">
                                            <div className="dish-img ">
                                                <img src="/images/menu-item-4.png" className="img-fluid" width='75%' alt="" />
                                            </div>
                                            <div className="dish-info py-3 text-center">
                                                <h4>Magnam Tiste</h4>
                                                <p>Lorem, deren, trataro, filede, nerada</p>
                                                <h3>$5.95</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                                        <div className="dish">
                                            <div className="dish-img ">
                                                <img src="/images/menu-item-5.png" className="img-fluid" width='75%' alt="" />
                                            </div>
                                            <div className="dish-info py-3 text-center">
                                                <h4>Magnam Tiste</h4>
                                                <p>Lorem, deren, trataro, filede, nerada</p>
                                                <h3>$5.95</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                                        <div className="dish">
                                            <div className="dish-img ">
                                                <img src="/images/menu-item-6.png" className="img-fluid" width='75%' alt="" />
                                            </div>
                                            <div className="dish-info py-3 text-center">
                                                <h4>Magnam Tiste</h4>
                                                <p>Lorem, deren, trataro, filede, nerada</p>
                                                <h3>$5.95</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials mt-2">
                    <div className="container">
                        <div className="section-header">
                            <h2>Testimonials</h2>
                            <p>What Are They <span style={{ color: 'red' }}> Saying About Us</span>
                            </p>
                        </div>
                        <div className="container my-3 d-flex justify-content-center">
                            <div id="carouselExampleAutoplaying" class="carousel slide testi-caro" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active p-2">
                                        <div className=" row caro-item w-100 h-100 d-flex">
                                            <div className=" col-12 col-lg-8 testi-info text-center text-lg-start">
                                                <p><span style={{ position: 'relative', bottom: '6px' }} className="mx-1"><img src="/images/2-quote-2.png" alt="" /></span>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. amet consectetur adipisicing elit. Praesentium hic amet labore.<span style={{ position: 'relative', bottom: '6px' }} className="mx-1"><img src="/images/2-quote-1.png" alt="" /></span></p>
                                                <h3>James Smith</h3>
                                                <h4>Designer</h4>
                                                <div className="d-flex my-2 justify-content-center justify-content-lg-start">
                                                    <img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                                                <img src="/images/testi-img.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item  p-2">
                                        <div className=" row caro-item w-100 h-100 d-flex">
                                            <div className=" col-12 col-lg-8 testi-info text-center text-lg-start">
                                                <p><span style={{ position: 'relative', bottom: '6px' }} className="mx-1"><img src="/images/2-quote-2.png" alt="" /></span>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. amet consectetur adipisicing elit. Praesentium hic amet labore.<span style={{ position: 'relative', bottom: '6px' }} className="mx-1"><img src="/images/2-quote-1.png" alt="" /></span></p>
                                                <h3>Oliver Sckipp</h3>
                                                <h4>Entrepreneur</h4>
                                                <div className="d-flex my-2 justify-content-center justify-content-lg-start">
                                                    <img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                                                <img src="/images/testi-img-2.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item  p-2">
                                        <div className=" row caro-item w-100 h-100 d-flex">
                                            <div className=" col-12 col-lg-8 testi-info text-center text-lg-start">
                                                <p><span style={{ position: 'relative', bottom: '6px' }} className="mx-1"><img src="/images/2-quote-2.png" alt="" /></span>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. amet consectetur adipisicing elit. Praesentium hic amet labore.<span style={{ position: 'relative', bottom: '6px' }} className="mx-1"><img src="/images/2-quote-1.png" alt="" /></span></p>
                                                <h3>Ben Larson</h3>
                                                <h4>Designer</h4>
                                                <div className="d-flex my-2 justify-content-center justify-content-lg-start">
                                                    <img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" /><img src="/images/rate-star.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                                                <img src="/images/testi-img-3.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

const Events = () => {
    return (

        <>
            <section className="section-2" id='Events'>
                <div className="container">
                    <div className="section-header">
                        <h2>EVENTS</h2>
                        <p>SHARE <span style={{ color: 'red' }}>YOUR MOMENTS </span> IN OUR RESTUARANT</p>
                    </div>
                </div>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner event-caro">
                        <div className="event-hsla d-flex align-items-center">
                            <div class="carousel-item active">
                                <div className="row gy-4">
                                    <div className="col-12 col-lg-6 text-center">
                                        <img src="/images/event-1.jpg" className="img-fluid" alt="" width='80%' />
                                    </div>
                                    <div className="col-12 col-lg-6 event-info text-center text-lg-start">
                                        <h3>Custom Parties</h3>
                                        <p>$120</p>
                                        <div className="d-flex align-items-center align-items-lg-start h-75">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit ratione illo magnam repellendus quas, dolore ea minus provident officiis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div className="row gy-4">
                                    <div className="col-12 col-lg-6 text-center">
                                        <img src="/images/event-2.jpg" className="img-fluid" alt="" width='80%' />
                                    </div>
                                    <div className="col-12 col-lg-6 event-info text-center text-lg-start">
                                        <h3>Birthday Parties</h3>
                                        <p>$120</p>
                                        <div className="d-flex align-items-center align-items-lg-start h-75">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit ratione illo magnam repellendus quas, dolore ea minus provident officiis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div className="row gy-4">
                                    <div className="col-12 col-lg-6 text-center">
                                        <img src="/images/event-3.jpg" className="img-fluid" alt="" width='80%' />
                                    </div>
                                    <div className="col-12 col-lg-6 event-info text-center text-lg-start">
                                        <h3>Private Parties</h3>
                                        <p>$120</p>
                                        <div className="d-flex align-items-center align-items-lg-start h-75">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit ratione illo magnam repellendus quas, dolore ea minus provident officiis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

const Chefs = () => {
    return (
        <>
            <section className="section-2" id='Chefs'>
                <div className="container">
                    <div className="section-header">
                        <h2>CHEFS</h2>
                        <p>OUR <span style={{ color: 'red' }}>PROFESSIONAL </span>CHEFS</p>
                    </div>
                    <div className="chefs-cont my-3">
                        <div className="row gy-4">
                            <div className="col-12 col-lg-4 p-3">
                                <div className="chef-box">
                                    <div className="chef-img">
                                        <img src="/images/chefs-1.jpg" className="img-fluid" alt="" />
                                        <div>
                                            <img src="/images/fb.png" alt="" className="py-1" /><img src="/images/tw.png" alt="" className="py-1" /><img src="/images/lin.png" alt="" className="py-1" />
                                        </div>
                                    </div>
                                    <div className="chef-info d-flex flex-column text-center align-items-center justify-content-center p-2">
                                        <h4>Walter White</h4>
                                        <span>Senior Chef</span>
                                        <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 p-3">
                                <div className="chef-box">
                                    <div className="chef-img">
                                        <img src="/images/chefs-2.jpg" className="img-fluid" alt="" />
                                        <div>
                                            <img src="/images/fb.png" alt="" className="py-1" /><img src="/images/tw.png" alt="" className="py-1" /><img src="/images/lin.png" alt="" className="py-1" />
                                        </div>
                                    </div>
                                    <div className="chef-info d-flex flex-column text-center align-items-center justify-content-center p-2">
                                        <h4>Micheal Oliver</h4>
                                        <span>Cook</span>
                                        <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 p-3">
                                <div className="chef-box">
                                    <div className="chef-img">
                                        <img src="/images/chefs-3.jpg" className="img-fluid" alt="" />
                                        <div>
                                            <img src="/images/fb.png" alt="" className="py-1" /><img src="/images/tw.png" alt="" className="py-1" /><img src="/images/lin.png" alt="" className="py-1" />
                                        </div>
                                    </div>
                                    <div className="chef-info d-flex flex-column text-center align-items-center justify-content-center p-2">
                                        <h4>James Edwards</h4>
                                        <span>Practioner</span>
                                        <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Contact = () => {

    const [data, setData] = useState({ name: '', phone: '', subject: '', msg: '' });

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [sub, setSub] = useState('');
    const [msg, setMsg] = useState('');

    const Submit = async (e) => {
        e.preventDefault();

        if (emptyField()) {
            setData({ name: name, phone: phone, subject: sub, msg: msg });
            alert('Your message recorded successfully! We will reach you soon.');
        }


    }
    const emptyField = () => {
        let isValid = true;
        if (!name) {
            setNameError('Please Enter Name*');
            isValid = false;
        }
        else {
            setNameError('');
        }

        if (!phone) {
            setPhoneError('Please Enter Phone Number*')
        }
        else {
            setPhoneError('')
        }
        return isValid
    }

    useEffect(() => {
        // loadData();
        const loadData = async (req, res) => {
            if (data.name !== '' && data.phone !== '' && data.sub !== '' && data.msg !== '') {
                try {
                    res = await axios.post('http://localhost:3000/CustomerMsg');
                    console.log(res.data);
                } catch (error) {

                    console.log('No Data')
                }
            }
        }
        loadData()

        console.log(data)
    }, [data]);



    return (
        <>
            <section className="section-2 section-bg" id='Contact'>
                <div className="container">
                    <div className="section-header">
                        <h2>CONTACT</h2>
                        <p>NEED HELP? <span style={{ color: 'red' }}>CONTACT US </span></p>
                    </div>
                    <div className="contact-boxes my-2">
                        <div className="row gy-4">
                            <div className="col-12 col-lg-6 py-1 px-3">
                                <div className="contact-info d-flex p-2">
                                    <div className="contact-icon p-2 d-flex justify-content-center align-items-center">
                                        <img src="/images/map.png" alt="" />
                                    </div>
                                    <div className="contact-details p-2">
                                        <h3>Our Address</h3>
                                        <p>A108 M.G Road, Shivaji Nagar, Pune</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6  py-1 px-3">
                                <div className="contact-info d-flex p-2">
                                    <div className="contact-icon p-2 d-flex justify-content-center align-items-center">
                                        <img src="/images/mail.png" alt="" />
                                    </div>
                                    <div className="contact-details p-2">
                                        <h3>Email</h3>
                                        <p>info@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6  py-1 px-3">
                                <div className="contact-info d-flex p-2">
                                    <div className="contact-icon p-2 d-flex justify-content-center align-items-center">
                                        <img src="/images/f-phone.png" alt="" />
                                    </div>
                                    <div className="contact-details p-2">
                                        <h3>Call Us</h3>
                                        <p>+12 3456781233</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6  py-1 px-3">
                                <div className="contact-info d-flex p-2">
                                    <div className="contact-icon p-2 d-flex justify-content-center align-items-center">
                                        <img src="/images/f-clock.png" alt="" />
                                    </div>
                                    <div className="contact-details p-2">
                                        <h3>Opening Hours</h3>
                                        <p><span className="fw-bold">Mon - Sat: </span> 10am - 11pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form my-2 p-4">
                        <form action="" onSubmit={(e) => Submit(e)} >
                            <div class="row gy-3 my-2">
                                <div class="col-12 col-lg-6 ">
                                    <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" aria-label="" />
                                    {
                                        nameError && <p className="mt-1 text-danger">{nameError}</p>
                                    }
                                </div>
                                <div class="col-12 col-lg-6 ">
                                    <input type="text" class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your Phone" aria-label="Last name" />
                                    {
                                        phoneError && <p className="mt-1 text-danger">{phoneError}</p>
                                    }
                                </div>
                                <div class="col-12 ">
                                    <input type="text" class="form-control" value={sub} onChange={(e) => setSub(e.target.value)} placeholder="Subject" aria-label="Last name" />
                                </div>
                                <div className="col-12">
                                    <textarea class="form-control" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message' id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>
                                <div class="col-12 text-center mt-5">
                                    <button class="btn btn-danger">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </section >
        </>
    )
}

export { Pages, Home, About }