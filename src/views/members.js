import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { Input } from '@material-ui/core';

const Signin = () => {  
  const history = useHistory();

  const goTeamMembers = () => {
    history.push('/members');
  }

  return (
    <div className="container d-flex flex-column">
      <div className="menu">
        <span className="font-14">Home</span>
        <Link to="/signin" className="font-14">Log Out</Link>
      </div>
      <div className="page-header">
        <span className="font-36 font-bold">EDIT TEAM MEMBERS</span>
      </div>
      <div className="detail">
        <div className='detail-group'>
          <div className='detail-label'>COMPANY</div>
          <div className='detail-value'>ROCKWELL GROUP</div>
        </div>
        <div className='detail-group'>
          <div className='detail-label'>ROLE</div>
          <div className='detail-value'>INTERIOR DESIGN</div>
        </div>
      </div>
      <div className="main-content members-content">
        <table className='table'>
          <thead>
            <tr>
              <th width="20"></th>
              <th width="320"></th>
              <th width="50"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td colSpan={2}>TEAM MEMBERS</td>
            </tr>
            <tr>
              <td className='text-right'>1.</td>
              <td>
                <div className='project-item bg'>
                  <span>Rockwell Group</span>
                  <span>Interior Design</span>
                </div>
              </td>
              <td className='text-center text-decoration'><div className="button">Remove</div></td>
            </tr>
            <tr>
              <td className='text-right'>2.</td>
              <td>
                <div className='project-item bg'>
                  <span>Rockwell Group</span>
                  <span>Interior Design</span>
                </div>
              </td>
              <td className='text-center text-decoration'><div className="button">Remove</div></td>
            </tr>
            <tr>
              <td className='text-right'>3.</td>
              <td>
                <div className='project-item bg'>
                  <span>Rockwell Group</span>
                  <span>Interior Design</span>
                </div>
              </td>
              <td className='text-center text-decoration'><div className="button">Remove</div></td>
            </tr>
          </tbody>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th width="310"></th>
              <th width="50"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td colSpan={2}>SEARCH</td>
            </tr>
            <tr>
              <td><div className='bg'></div></td>
              <td className='text-center text-decoration'><div className="button">Add</div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='buttons'>
        <div className='save-btn'>Save</div>
        <div className='cancel-btn'>Cancel</div>
      </div>
    </div>
  )
}

export default Signin;
