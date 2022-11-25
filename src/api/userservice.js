import { API_URL } from '../config';

import { Company } from '../proto/company_pb';
import { SignupRequest, GetCompanyInfoRequest, GetAllProjectsRequest, CreateProjectRequest } from '../proto/user_service_pb';
import { UserServiceClient } from '../proto/user_service_grpc_web_pb';

const client = new UserServiceClient(API_URL, null, null);

export default {
  signup: (username, company, role) => {
    return new Promise(resolve => {
      const com = new Company();
      com.setUsername(username);
      com.setCompanyName(company);
      com.setRole(role);
  
      const request = new SignupRequest();
      request.setCompany(com);
      console.log(request)
  
      client.signup(request, {}, (err, response) => {
        resolve({ err, response });
        console.log(err, response);
      })
    })
  },
  GetCompanyInfo: (username) => {
    return new Promise(resolve => {
      const request = new GetCompanyInfoRequest();
      request.setUsername(username);
      console.log(request)

      client.getCompanyInfo(request, {}, (err, response) => {
        console.log(err, response);
        if (err)
          return resolve({ err, response });
        const com = response.getCompany();
        const username = com.getUsername();
        const company = com.getCompanyName();
        const role = com.getRole();
        resolve({ err, response: { username, company, role } });
      })
    })
  },
  GetAllProjects: (username) => {
    return new Promise(resolve => {
      const request = new GetAllProjectsRequest();
      request.setUsername(username);

      client.getAllProjects(request, {}, (err, response) => {
        resolve({ err, response });
        console.log(err, response);
      })
    })
  },
  CreateProjectRequest: (project_name, username, company, role) => {
    return new Promise(resolve => {
      const request = new CreateProjectRequest();
      request.setProjectName(project_name);
      const com = new Company();
      com.setUsername(username);
      com.setCompanyName(company);
      com.setRole(role);
      request.setCompany(com);

      client.getAllProjectsRequest(request, {}, (err, response) => {
        resolve({ err, response });
        console.log(err, response);
      })
    })
  }
}