import React from 'react'
import { NavLink } from 'react-router-dom'

const BookaTable = () => {
    return (
        <>
            <section className="section-3" id='Contact'>
                <div className="container">
                    <div className="section-header">
                        <h2>BOOK A TABLE</h2>
                        <p>BOOK <span style={{ color: 'red' }}>YOUR STAY </span> WITH US</p>
                        <h5><NavLink to='/'>Home</NavLink> / Book a Table</h5>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4 reservation order-2 order-lg-2">
                        </div>
                        <div className="col-12 col-lg-8 py-3 px-2 py-lg-5 d-flex align-items-center justify-content-center order-1 order-lg-2 reser-forms">
                            <form action="">
                                <div class="row gy-3 my-2">
                                    <div class="col-12 col-lg-4 ">
                                        <input type="text" class="form-control" placeholder="Your Name" aria-label="" />
                                    </div>
                                    <div class="col-12 col-lg-4 ">
                                        <input type="text" class="form-control" placeholder="Your Phone" aria-label="Last name" />
                                    </div>
                                    <div class="col-12 col-lg-4 ">
                                        <input type="text" class="form-control" placeholder="Your Email" aria-label="Last name" />
                                    </div>
                                </div>
                                <div class="row gy-3 my-2">
                                    <div class="col-12 col-lg-4">
                                        <input type="date" class="form-control" placeholder="Date" aria-label="" />
                                    </div>
                                    <div class="col-12 col-lg-4 ">
                                        <input type="time" class="form-control" placeholder="Time" aria-label="Last name" />
                                    </div>
                                    <div class="col-12 col-lg-4 ">
                                        <input type="number" class="form-control" placeholder="#of People" aria-label="Last name" />
                                    </div>
                                    <div className="col-12">
                                        <textarea class="form-control" placeholder='Message' id="exampleFormControlTextarea1" rows="4"></textarea>
                                    </div>
                                    <div class="col-12 text-center mt-5">
                                        <button type="submit" class="btn btn-danger">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookaTable
