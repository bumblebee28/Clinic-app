import React from 'react'
import './register.css'

export default function Register() {
    return (
        <div id="bg">
            <div className="Main">
                <div className="wrapper bg-white my-2">
                    <div className="h3" style={{ color: 'black' }}>Doctor's Registration Protal</div>
                    <div className="form">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Name</label> <input type="text" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Clinic Name</label> <input type="text" className="form-control" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                            <label>Email</label> <input type="email" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Gender</label>
                                <div className="d-flex align-items-center mt-2"> <label className="option"> <input type="radio" name="radio" />Male <span className="checkmark"></span> </label> <label className="option ms-4"> <input type="radio" name="radio" />Female <span className="checkmark"></span> </label> </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                            <label>Create Password</label> <input type="password" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Phone Number</label> <input type="tel" className="form-control" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 my-md-2 my-3">
                                <label>Address</label> <input type="Address" className="form-control" required />
                            </div>
                        </div>
                        <div className=" my-md-2 my-3">
                            <label>Field of Study</label> <select id="sub" required>
                                <option value="" selected hidden>Choose Option</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Dentist">Dentist</option>
                                <option value="Eye">Eye</option>
                                <option value="Phychiotrist">Phychiotrist</option>
                                <option value="Gynaecologist">Gynaecologist</option>
                            </select> </div>
                        <div className="btn btn-primary mt-3">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
