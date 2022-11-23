import { API_URL } from '../config';

import { Company } from '../proto/company_pb';
import { SignupRequest, SignupResponse } from '../proto/user_service_pb';
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
  
      client.signup(request, {}, (err, response) => {
        console.log(err, response);
      })
    })
  }
}