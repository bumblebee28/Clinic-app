import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <>
      <section className="login py-5">
       <div className="container" style={{padding:'59px'}} >
            <div className="row g-0">
                <div className="col-lg-5">
                    <div className="image"></div>
                </div>
                <div className="col-lg-7 text-center py-2">
                    <h2 style={{color:'black', font:'caption', fontSize:'40px', fontWeight:'bold'}}>Sign In your Account</h2> 
                <form>
                    <div className="form-row py-2 pt-2">
                        <div className="offset-1 col-lg-10">
                            <img src="https://img.icons8.com/ios-glyphs/40/000000/user--v1.png"/>
                            <input type="text" className="inp my-3 mx-3 px-3" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-row pt-1">
                        <div className="offset-1 col-lg-10">
                            <img src="https://img.icons8.com/material/40/000000/lock--v1.png"/>
                            <input type="password" className="inp mx-3 px-3" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-row" style={{color:'black'}}>
                    <div className="offset-1 col-md-10"> 
                        <div className="align-items-center mt-4" style={{font:'caption', fontSize:'18px'}}> <label className="option"> <input type="radio" name="radio"/>User<span className="checkmark"></span> </label> <label className="option ms-4"> <input type="radio" name="radio"/>Doctor<span className="checkmark"></span> </label> </div>
                    </div>
                    </div>
                    <div className="form-row pt-4">
                        <div className="offset-1 col-6">
                            <button className="btn1">
                            <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/30/000000/external-login-real-estate-kmg-design-glyph-kmg-design.png"/>
                               Login</button> 
                            {/* <p className="float-right"><input type="checkbox">Remember Me</p> */}
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
