import React from 'react'
import './UserHome.css'

export default function UserHome() {
  return (
    <>
      <div id='main'>
        <div className="searchCont" id='searchbox'>
          <h2 id='h2'>Search your nearest Clinics:</h2>
          <input className="form-control me-2" type="search" placeholder="Enter your Location" aria-label="Search" id='search' autoComplete='OFF'/>
          <button className="btn btn-info my-3" type="submit" id='btn'>Search</button>
        </div>
      </div>
      <div className="contain">
        <span className="item">Dentist</span>
        <span className="item">Eye</span>
        <span className="item">Psychiatrist</span>
        <span className="item">Dermatologist</span>
        <span className="item">Gynaecologist</span>
        <span className="item">General surgeon</span>
      </div>


    </>
  )
}

