import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { Input } from '@material-ui/core';

const UpdateObject = () => {  
  const history = useHistory();

  const goTeamMembers = () => {
    history.push('/members');
  }

  const goUpdateObject = () => {
    history.push('/updateobject');
  }

  return (
    <div className="container d-flex flex-column">
      <div className="menu">
        <span className="font-14">Home</span>
        <Link to="/signin" className="font-14">Log Out</Link>
      </div>
      <div className="page-header">
        <span className="font-36 font-bold">UPDATE PRIMARY OBJECT</span>
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
      <div className="main-content project-content">
        <div className="first-column">
          <table className='table'>
            <thead>
              <tr>
                <th width="130"></th>
              </tr>
            </thead>
            <tbody>
              <tr className='has-head'>
                <td>OBJECT NAME</td>
              </tr>
              <tr>
                <td>
                  <div className='home-project-item'>
                    <span className="home-project-name font-20">OBJECT 1</span>
                    <span className="icon-btn bg bg-dark" onClick={goUpdateObject}>
                      <Edit />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{marginRight: '100px'}}>
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
                <td colSpan={2}>AFFILIATED PARTIES</td>
              </tr>
              <tr>
                <td className='text-right'>1.</td>
                <td>
                  <div className='project-item bg'>
                    <span>COMPANY2</span>
                    <span>Role 1</span>
                  </div>
                </td>
                <td className='text-center text-decoration'><div className="button">Remove</div></td>
              </tr>
              <tr>
                <td className='text-right'>1.</td>
                <td>
                  <div className='project-item bg'>
                    <span>COMPANY2</span>
                    <span>Role 1</span>
                  </div>
                </td>
                <td className='text-center text-decoration'><div className="button">Remove</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th width="150"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td>CURRENT VERSION</td>
            </tr>
            <tr>
              <td>
                <span className="font-20">1.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{marginTop: '100px'}}>        
        <table className='table'>
          <thead>
            <tr>
              <th width="150"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td>INFORMATION</td>
            </tr>
            <tr>
              <td>
                <div style={{width: '975px'}}>
                  <textarea className='input-area'></textarea>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='buttons'>
        <div className='save-btn'>Save</div>
        <div className='delete-btn'>Delete</div>
        <div className='cancel-btn'>Cancel</div>
      </div>
    </div>
  )
}

export default UpdateObject;
