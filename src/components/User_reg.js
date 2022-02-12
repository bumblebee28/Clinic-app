import React from 'react'
import './register.css'

export default function User_reg() {
    return (
        <div id="bg" style={{padding:'85px'}}>
            <div className="Main">
                <div className="wrapper bg-white my-3" >
                    <div className="h3" style={{ color: 'black' }}>User Registration Protal</div>
                    <div className="form">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>First Name</label> <input type="text" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Last Name</label> <input type="text" className="form-control" required />
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
    
                        <div className="btn btn-primary mt-3">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
