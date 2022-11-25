import { API_URL } from '../config';

import { Company } from '../proto/company_pb';
import { GetAllObjectsInProjectForUserRequest, AddCompanyToObjectRequest, GetAllCompaniesInObjectRequest, UpdateObjectVersionRequest, ApproveObjectVersionRequest } from '../proto/object_service_pb';
import { ObjectServceClient } from '../proto/object_service_grpc_web_pb';

const client = new ObjectServceClient(API_URL, null, null);

export default {
  GetAllObjectsInProjectForUser: ({username, projectId}) => {
    return new Promise(resolve => {
      const request = new GetAllObjectsInProjectForUserRequest();
      request.setProjectId(projectId);
      request.setUsername(username);

      client.getAllObjectsInProjectForUser(request, {}, (err, response) => {
        if (err) return resolve({ err, response });
        resolve({ err, response: response.toObject() });
      })
    })
  },
  AddCompanyToObject: ({ objectId, userAdder, userAdded }) => {
    return new Promise(resolve => {
      const request = new AddCompanyToObjectRequest();
      request.setObjectId(objectId);
      request.setAdderUsername(userAdder);
      request.setUsernameAdded(userAdded);

      client.addCompanyToObject(request, {}, (err, response) => {
        if (err) return resolve({ err, response });
        resolve({ err, response: response.toObject() });
      })
    })
  },
  GetAllCompaniesInObject: (objectId) => {
    return new Promise(resolve => {
      const request = new GetAllCompaniesInObjectRequest();
      request.setObjectId(objectId);

      client.getAllCompaniesInObject(request, {}, (err, response) => {
        if (err) return resolve({ err, response });
        resolve({ err, response: response.toObject() });
      })
    })
  },
  UpdateObjectVersion: ({ objectId, username, name, version }) => {
    return new Promise(resolve => {
      const request = new UpdateObjectVersionRequest();
      request.setObjectId(objectId);
      request.setUsername(username);
      request.setUpdatedName(name);
      request.setUpdatedVersion(version);

      client.updateObjectVersion(request, {}, (err, response) => {
        if (err) return resolve({ err, response });
        resolve({ err, response: response.toObject() });
      })
    })
  },
  ApproveObjectVersion: ({ objectId, username }) => {
    return new Promise(resolve => {
      const request = new ApproveObjectVersionRequest();
      request.setObjectId(objectId);
      request.setUsername(username);

      client.approveObjectVersion(request, {}, (err, response) => {
        if (err) return resolve({ err, response });
        resolve({ err, response: response.toObject() });
      })
    })
  },
}