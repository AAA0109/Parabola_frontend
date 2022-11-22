import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { Input } from '@material-ui/core';

const Signin = () => {  
  const history = useHistory();

  const goManage = () => {
    history.push('/project');
  }

  return (
    <div className="container d-flex flex-column">
      <div className="menu">
        <span className="font-14">Home</span>
        <Link to="/signin" className="font-14">Log Out</Link>
      </div>
      <div className="page-header">
        <span className="font-36 font-bold">Home</span>
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
      <div className="main-content">
        <div className='font-14 sub-header'>PROJECTS</div>
        <table className='table'>
          <thead>
            <tr>
              <th width="20"></th>
              <th width="300"></th>
              <th width="80"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name bg bg-active">PROJECT 1</span>
                  <span className="icon-btn bg bg-dark">
                    <Edit />
                  </span>
                </div>
              </td>
              <td className='text-center'><div className="button" onClick={() => goManage()}>Manage</div></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name bg bg-active">PROJECT 1</span>
                  <span className="icon-btn bg bg-dark">
                    <Edit />
                  </span>
                </div>
              </td>
              <td className='text-center'><div className="button" onClick={() => goManage()}>Manage</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Signin;
