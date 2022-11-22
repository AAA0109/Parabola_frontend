import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '@material-ui/core';

const Signin = () => {  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  const signin = () => {
    history.push('/home');
  }

  return (
    <div className="container d-flex flex-column">
      <div className="menu">
        <span className="font-bold font-30">PARABOLA</span>
        <Link to="/signup" className="font-14">Sign Up</Link>
      </div>
      <div className="page-description">
        <span className="font-24">Collabrative Project Sync for Teams</span>
      </div>
      <div className="sign-form">
        <div className="sign-in">
          <div className="input-group">
            <div className="input-label">Username:</div>
            <Input className='input-text' value={username} onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="input-group">
            <div className="input-label">Password:</div>
            <Input type="password" className='input-text' value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className='sign-btn-container'>
            <div className="button" onClick={signin}>LOG IN</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;
