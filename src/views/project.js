import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { Input } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import projectservice from '../api/projectservice';
import objectservice from '../api/objectservice';
import { actions } from '../redux/_actions';

const Project = (props) => {  
  const [projectId, setProjectId] = useState('');
  const [objectName, setObjectName] = useState('');
  const [companies, setCompanies] = useState([]);
  const [objects, setObjects] = useState([]);
  
  const { username, role, company, projectName } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setProjectId(props.match.params.id);
    if (!projectId || !username) return;
    fetch();
  }, [projectId, username])

  const fetchComapnies = async () => {
    const res = await projectservice.GetAllCompaniesInProject(projectId);
    if (!res || res.err) {
      dispatch(actions.setError(res.err.message || 'Fetch CompaniesInProject failed!'));
      return;
    }
    setCompanies(res.response.companiesList)
  }

  const fetchObjects = async () => {
    const res = await objectservice.GetAllObjectsInProjectForUser({ username, projectId });
    if (!res || res.err) {
      dispatch(actions.setError(res.err.message || 'Fetch Objects failed!'));
      return;
    }
    console.log('objects', res.response.objectsList);
    setObjects(res.response.objectsList)
  }

  const fetch = async () => {
    await fetchComapnies();
    await fetchObjects();
  }

  const createObject = async () => {
    await projectservice.CreateObjectInProject({ projectId, objectName, username });
    await fetchObjects();
  }

  const approveObject = async (objectId) => {
    await objectservice.ApproveObjectVersion({ objectId, username });
    await fetchObjects();
  }

  const goTeamMembers = () => {
    history.push(`/members/${projectId}`);
  }

  const goUpdateObject = (objectId) => {
    history.push(`/updateobject/${objectId}`);
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
          <div className='detail-value'>{company}</div>
        </div>
        <div className='detail-group'>
          <div className='detail-label'>ROLE</div>
          <div className='detail-value'>{role}</div>
        </div>
        <div className='detail-group'>
          <div className='detail-label'>PROJECT</div>
          <div className='detail-value'>{projectName}</div>
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
            {objects.map((object, idx) => object.isPrimary && (
              <tr key={idx}>
                <td className='text-right'>{idx + 1}.</td>
                <td>
                  <div className='home-project-item'>
                    <span className="home-project-name bg bg-active">{object.name}</span>
                    <span className="icon-btn bg bg-dark" onClick={() => goUpdateObject(object.objectId)}>
                      <Edit />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                <div className='home-project-item'>
                  <span className="home-project-name"><Input className='input-text' value={objectName} onChange={e => setObjectName(e.target.value)}/></span>
                  <span className="icon-btn bg bg-dark" onClick={createObject}>
                    <span>+</span>
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
            {objects.map((object,idx) => (
              <tr key={idx}>
                <td className='text-right'>{idx + 1}.</td>
                <td>
                  <div className='home-project-item'>
                    <span className={"home-project-name bg " + (object.isPrimary ? "bg-active" : "")}>{object.name}</span>
                  </div>
                </td>
                <td><div className={'bg object-version ' + ((object.latestVersion !== object.pendingVersion) ? 'bg-dark' : '')}>{(object.latestVersion !== object.pendingVersion) && object.latestVersion}</div></td>
                <td className='object-push text-center'><span onClick={() => approveObject(object.objectId)}>{(object.latestVersion !== object.pendingVersion) && 'Push'}</span></td>
                <td><div className={'bg object-version ' + (object.isPrimary ? "bg-active" : "bg-dark")}>{object.pendingVersion}</div></td>
              </tr>
            ))}
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
            {companies.map((company, idx) => (
              <tr key={idx}>
                <td className='text-right'>{idx + 1}.</td>
                <td>
                  <div className='project-item bg'>
                    <span>{company.companyName}</span>
                    <span>{company.Role}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Project;
