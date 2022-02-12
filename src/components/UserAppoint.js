import React from 'react'
import './appoint.css'
import { Link } from 'react-router-dom'

export default function UserAppoint() {
  return (
    <div className="Main">
    <div className="container">
     <h1 id='head' className="text-center">Welcome user</h1>
        <div className="row">
            <div className="col-lg-6">
               <h2 className="text-center">Name of Clinic</h2> 
                 <div className="row">
                     <div className="col-12">
                     <h3>Address:</h3>
                     <p id="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut possimus delectus, nostrum recusandae eius molestias doloremque cumque blanditiis neque officiis totam nesciunt laudantium iste, expedita id ab repellat! Quis?</p>
                     <h3>Details:</h3>
                     <p id="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum officia modi, numquam cum quae odio, magnam recusandae, repudiandae vel maiores qui velit atque debitis consectetur distinctio illo soluta ipsum? Officia?</p>
                     </div>
                 </div>
            </div>
            <div className="col-lg-6 text-center Box d-flex flex-column align-items-center justify-content-sm-around">
               <Link className="btn btn-primary btn-lg mx-3" to='/result'>Book Your Appointment</Link>
               
                 <h3>Estimated queue time left : 40:00</h3>
               
               <div className="row Stat">
                   <div className="cur-tok col-6 text-center">
                     <i className="fa fa-edit"></i><span>Current Token</span>
                   </div>
                   <div className="tot-tok col-6 text-center">
                     <i className="fa fa-group"></i><span>Total Token</span>
                   </div>
                   <div className="row">
                   <div id="cur-tok" className="CurrentToken col-6 text-center">
                         1
                   </div>
                   <div id="tot-tok" className="TotalToken col-6 text-center">
                         100
                   </div>
                   </div>
              </div>
        </div>
    </div>
  </div>
 </div>  
  )
}
