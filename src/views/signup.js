import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@material-ui/core';

import userservice from '../api/userservice';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const signup = () => {
    userservice.signup(username, company, role);
  }

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
            <Input className='input-text' value={username} onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="input-group">
            <div className="input-label">Password:</div>
            <Input type="password" className='input-text' value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="input-group">
            <div className="input-label">Company:</div>
            <Input className='input-text' value={company} onChange={e => setCompany(e.target.value)}/>
          </div>
          <div className="input-group">
            <div className="input-label">Role:</div>
            <Input className='input-text' value={role} onChange={e => setRole(e.target.value)}/>
          </div>
          <div className='sign-btn-container'>
            <div className="button" onClick={signup}>Sign UP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;
