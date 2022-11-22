import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { Input } from '@material-ui/core';

const Project = () => {  
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
        <span className="font-36 font-bold">Dashboard</span>
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
        <div className='detail-group'>
          <div className='detail-label'>PROJECT</div>
          <div className='detail-value'>PROJECT 1</div>
        </div>
      </div>
      <div className="main-content project-content">
        <table className='table'>
          <thead>
            <tr>
              <th width="20"></th>
              <th width="300"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td colSpan={2}>PRIMARY OBJECT</td>
            </tr>
            <tr>
              <td className='text-right'>1.</td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name bg bg-active">OBJECT 1</span>
                  <span className="icon-btn bg bg-dark" onClick={goUpdateObject}>
                    <Edit />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-right'>2.</td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name bg bg-active">OBJECT 6</span>
                  <span className="icon-btn bg bg-dark" onClick={goUpdateObject}>
                    <Edit />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className='table'>
          <thead>
            <tr className=''>
              <th width="20"></th>
              <th width="300"></th>
              <th width="53"></th>
              <th width="50"></th>
              <th width="65"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td colSpan={2}>AFFILIATED OBJECT</td>
              <td>LATEST</td>
              <td></td>
              <td>CURRENT</td>
            </tr>
            <tr>
              <td className='text-right'>1.</td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name bg bg-active">OBJECT 1</span>
                </div>
              </td>
              <td><div className='bg object-version'></div></td>
              <td className='object-push text-center'>Push</td>
              <td><div className='bg bg-dark object-version'>1.01</div></td>
            </tr>
            <tr>
              <td className='text-right'>2.</td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name bg bg-active">OBJECT 2</span>
                </div>
              </td>
              <td><div className='bg bg-dark object-version'>1.03</div></td>
              <td className='object-push text-center'>Push</td>
              <td><div className='bg bg-active object-version'>1.02</div></td>
            </tr>
          </tbody>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th width="20"></th>
              <th width="320"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='has-head'>
              <td colSpan={2}>
                <div className='home-project-item small'>
                    <span className="">TEAM MEMBERS</span>
                    <span className="icon-btn bg bg-dark" onClick={() => goTeamMembers()}>
                      <Edit />
                    </span>
                  </div>
              </td>
            </tr>
            <tr>
              <td className='text-right'>1.</td>
              <td>
                <div className='project-item bg'>
                  <span>Rockwell Group</span>
                  <span>Interior Design</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-right'>2.</td>
              <td>
                <div className='project-item bg'>
                  <span>Rockwell Group</span>
                  <span>Interior Design</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-right'>3.</td>
              <td>
                <div className='project-item bg'>
                  <span>Rockwell Group</span>
                  <span>Interior Design</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Project;
