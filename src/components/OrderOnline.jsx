import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const OrderOnline = () => {

    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(1);

    const AddBuy = () => {
        setCount(count + 1);
        setPrice(price + price);
    }
    return (
        <>
            <section className="section-3" id='Contact'>
                <div className="container">
                    <div className="section-header">
                        <h2></h2>
                        <p>Get Your Meal <span style={{ color: 'red' }}>Delivered At Your Place </span></p>
                        <h5><NavLink to='/'>Home</NavLink> / Order Online</h5>
                    </div>
                    <div className="order-section">
                        <div className="container d-flex justify-content-center">
                            <div className="order-form p-2 p-lg-3">
                                <div className="order-form-heading">
                                    <h4>Order Details</h4>
                                    <p>Select your delicious meal and place your order by filling-out the form below*</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div class="accordion custom-accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button accordion-bg-1 text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <div>
                                                            Breakfast
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        hello
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div class="accordion custom-accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button accordion-bg-21 text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        <div>
                                                            Lunch
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div class="accordion custom-accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button accordion-bg-3 text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                        <div>
                                                            Desert
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        hello
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='mt-4' />
                                    <div className="order-form-heading mt-3">
                                        <h4>Customer Details</h4>
                                        <p>Please provide your details as asked*</p>
                                    </div>
                                    <div className="col-12 col-lg-4 mb-2 mb-lg-0">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="Full name"></input>
                                    </div>
                                    <div className="col-12 col-lg-4  mb-2 mb-lg-0">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="Phone Number 1"></input>
                                    </div>
                                    <div className="col-12 col-lg-4  mb-2 mb-lg-0">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="Phone Number 1"></input>
                                    </div>
                                    <div className="col-12  mb-2 mt-lg-3">
                                        <textarea class="form-control w-100" id="exampleFormControlTextarea1" placeholder='Enter Shipping Address' rows="3"></textarea>
                                    </div>
                                    <hr className='mt-4' />
                                    <div className="order-form-heading mt-3">
                                        <h4>Payment Details</h4>
                                        <p>Select Payment Option*</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label class="form-check-label" for="inlineRadio1">Cash on delivery</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                            <label class="form-check-label" for="inlineRadio2">Card Payment</label>
                                        </div>
                                    </div>
                                    <hr className='my-4' />
                                    <div className="order-button text-center">
                                        <button className='btn btn-success'>Submit</button>
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

export default OrderOnline;
