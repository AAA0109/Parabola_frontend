import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@material-ui/core';

const Signin = () => {  
  return (
    <div className="container d-flex flex-column">
      <div className="menu">
        <span className="font-bold font-30">PARABOLA</span>
        <Link to="/signin" className="font-14">Log in</Link>
      </div>
      <div className="page-description">
        <span className="font-24">Collabrative Project Sync for Teams</span>
      </div>
      <div className="sign-form">
        <div className="sign-up">
          <div className="input-group">
            <div className="input-label">Username:</div>
            <Input className='input-text'/>
          </div>
          <div className="input-group">
            <div className="input-label">Password:</div>
            <Input type="password" className='input-text'/>
          </div>
          <div className="input-group">
            <div className="input-label">Company:</div>
            <Input type="password" className='input-text'/>
          </div>
          <div className="input-group">
            <div className="input-label">Role:</div>
            <Input type="password" className='input-text'/>
          </div>
          <div className='sign-btn-container'>
            <div className="button">Sign UP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;
