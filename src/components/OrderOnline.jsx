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
                        <h2>Order Online</h2>
                        <p>Get Your Meal <span style={{ color: 'red' }}>Delivered At Your Place </span></p>
                        <h5><NavLink to='/'>Home</NavLink> / Order Online</h5>
                    </div>
                    <div className="order-form mt-2 mx-auto p-2 p-lg-4">
                        <form action="" className='form'>
                            <h5 className="text-light text-center">Order Details</h5>
                            <div className="row gy-4">
                                <div class="col-6 col-lg-3 ">
                                    <label className='text-light fw-bold py-1' for="inlineFormSelectPref">Category</label>
                                    <select class="form-select" id="inlineFormSelectPref">
                                        <option selected>Starter</option>
                                        <option value="1">Breakfast</option>
                                        <option value="2">Lunch</option>
                                        <option value="3">Dinner</option>
                                    </select>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <label className='text-light fw-bold py-1' for="inlineFormSelectPref">Meal</label>
                                    <select class="form-select" id="inlineFormSelectPref">
                                        <option selected>Upma</option>
                                        <option value="1" onSelect={() => setPrice(25)}>Breakfast</option>
                                        <option value="2">Lunch</option>
                                        <option value="3">Dinner</option>
                                    </select>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <label className='text-light fw-bold py-1 ' for="count">Count</label>
                                    <div class="input-group mb-3">
                                        <button class="btn btn-secondary" type="button" id="button-addon1" onClick={() => setCount(count - 1)}>-</button>
                                        <input type="text" value={count} class="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <button class="btn btn-secondary" type="button" id="button-addon1" onClick={() => AddBuy()}>+</button>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3 ">
                                    <label className='text-light fw-bold py-1' for="inlineFormSelectPref">Total Amount</label>
                                    <input type="text" value={price} class="form-control mx-auto" placeholder="First name" aria-label="First name" />
                                </div>

                                {/* Customer Details  */}
                                <h5 className="text-light text-center">Customer Details</h5>
                                <div class="row">
                                    <div class="col-12 col-lg-4 my-1 my-lg-0 d-flex justify-content-center">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col-12 col-lg-4 my-1 my-lg-0">
                                        <input type="text" class="form-control mx-auto" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                    <div class="col-12 col-lg-4 my-1 my-lg-0">
                                        <input type="text" class="form-control mx-auto" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                    <div className="col-12 my-1 my-lg-0 pt-1 pt-lg-3">

                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter Your Address' rows="3"></textarea>
                                    </div>
                                </div>

                            </div>
                            {/* Payment Details  */}
                            <div className="container my-4">
                                <div className="row gy-4">
                                    <div className="col-12">
                                        <h5 className="text-light text-center">Payment Details</h5>
                                    </div>
                                    <div className="col-12">
                                        <div className="row gy-4">
                                            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                                <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" />
                                                <label class="btn btn-outline-light" for="btn-check">Card Payment</label>
                                            </div>
                                            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                                <input type="checkbox" class="btn-check" id="btn-check-2" autocomplete="off" />
                                                <label class="btn btn-outline-light" for="btn-check-2">Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderOnline;
