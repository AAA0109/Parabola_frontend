import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { Input } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import projectservice from '../api/projectservice';
import objectservice from '../api/objectservice';
import { actions } from '../redux/_actions';
import { useAuth } from '../Auth';

const UpdateObject = (props) => {
  const [projectId, setProjectId] = useState('');
  const [objectId, setObjectId] = useState('');
  const [objectName, setObjectName] = useState('');
  const [objectVersion, setObjectVersion] = useState('');
  const [companies, setCompanies] = useState([]);
  const { auth } = useAuth();

  const { username, role, company, projectName } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    setObjectId(props.match.params.id);
    setProjectId(props.match.params.projectId);
    if (!objectId || !username) return;
    fetch();
  }, [objectId, projectId, username])
  
  const fetchComapnies = async () => {
    const res = await objectservice.GetAllCompaniesInObject(objectId);
    if (!res || res.err) {
      dispatch(actions.setError(res.err.message || 'Fetch CompaniesInObject failed!'));
      return;
    }
    console.log(res.response.companiesList);
    setCompanies(res.response.companiesList)
  }

  const fetchObjects = async () => {
    const res = await objectservice.GetAllObjectsInProjectForUser({ username, projectId });
    if (!res || res.err) {
      dispatch(actions.setError(res.err.message || 'Fetch Objects failed!'));
      return;
    }
    const objects = res.response.objectsList;
    const object = objects.find(object => object.objectId == objectId)
    setObjectName(object && object.name);
    setObjectVersion(object && object.latestVersion)
  }

  const fetch = async () => {
    await fetchObjects();
    await fetchComapnies();
  }

  const signout = async () => {
    await auth.signOut();
    history.push('/signin');
  }

  const removeCompany = async (idx) => {
    console.log(idx)
    await objectservice.RemoveCompanyInObject({ objectId, company: companies[idx] })
    await fetch();
  }

  const UpdateObject = async () => {
    let version = objectVersion.replace(/\./g, '');
    version = parseFloat(version) + 1 + '';
    version = version[0] + '.' + version[1] + '.' + version[2];
    await objectservice.UpdateObjectVersion({ objectId, username, name: objectName, version });
    await fetch();
    // setObjectVersion(version)
  }

  return (
    <div className="container d-flex flex-column">
      <div className="menu">
        <a onClick={() => history.push('/home')} className="font-14">Home</a>
        <a onClick={signout} className="font-14">Log Out</a>
      </div>
      <div className="page-header">
        <span className="font-36 font-bold">UPDATE PRIMARY OBJECT</span>
      </div>
      <div className="detail">
        <div className='detail-group'>
          <div className='detail-label'>COMPANY</div>
          <div className='detail-value'>{company}</div>
        </div>
        <div className='detail-group'>
          <div className='detail-label'>ROLE</div>
          <div className='detail-value'>{role}</div>
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
                    <Input className="home-project-name font-20 input-text" value={objectName} onChange={(e) => setObjectName(e.target.value)} />
                    <span className="icon-btn bg bg-dark" onClick={UpdateObject}>
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
              {companies.map((company, idx) => (
                <tr key={idx}>
                  <td className='text-right'>{idx + 1}.</td>
                  <td>
                    <div className='project-item bg'>
                      <span>{company.name}</span>
                      <span>{company.role}</span>
                    </div>
                  </td>
                  <td className='text-center text-decoration'><div className="button" onClick={() => {removeCompany(idx)}}>{(company.username.toLocaleLowerCase() !== username) && 'Remove'}</div></td>
                </tr>
              ))}
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
                <span className="font-20">{objectVersion}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div style={{marginTop: '100px'}}>        
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
      </div> */}
      {/* <div className='buttons'>
        <div className='save-btn'>Save</div>
        <div className='delete-btn'>Delete</div>
        <div className='cancel-btn'>Cancel</div>
      </div> */}
    </div>
  )
}

export default UpdateObject;
